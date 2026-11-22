#!/bin/bash
# 一键处理：JPG → WebP（原图保留）+ 写入缓存头 + 提交并推送到 GitHub
# 用法:  bash run.sh [图片文件夹路径]
# 不传路径时，脚本会提示你把图片文件夹拖进终端。

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "================================"
echo "  Timehome 图片优化一键脚本"
echo "================================"

# 1. 找 Git 仓库根目录（从当前目录 / 脚本目录 / 图片目录分别向上找 .git）
find_git_root() {
  local d="$1"
  while [ "$d" != "/" ]; do
    if [ -d "$d/.git" ]; then echo "$d"; return 0; fi
    d="$(dirname "$d")"
  done
  return 1
}

IMG_DIR="$1"
REPO_ROOT="$(find_git_root "$PWD" || true)"
[ -z "$REPO_ROOT" ] && REPO_ROOT="$(find_git_root "$SCRIPT_DIR" || true)"
[ -z "$REPO_ROOT" ] && [ -n "$IMG_DIR" ] && REPO_ROOT="$(find_git_root "$IMG_DIR" || true)"
if [ -z "$REPO_ROOT" ]; then
  echo "❌ 在当前目录及上级都没找到 Git 仓库（.git 文件夹）。"
  echo "   请先终端 cd 到你的网站项目文件夹里，再运行本脚本。"
  exit 1
fi
echo "✅ 找到仓库：$REPO_ROOT"

# 2. 检查 Node.js
if ! command -v node >/dev/null 2>&1; then
  echo "❌ 没有检测到 Node.js。请先安装：https://nodejs.org （下载 LTS 版，一路下一步）"
  exit 1
fi
echo "✅ Node.js：$(node -v)"

# 3. 确定图片文件夹
IMG_DIR="$1"
if [ -z "$IMG_DIR" ]; then
  echo ""
  echo "👉 请把存放产品图片的文件夹从访达拖到本窗口，然后按回车："
  read -r IMG_DIR
  IMG_DIR="${IMG_DIR%/}"   # 去掉末尾斜杠
fi
if [ ! -d "$IMG_DIR" ]; then
  echo "❌ 文件夹不存在：$IMG_DIR"
  exit 1
fi
echo "✅ 图片文件夹：$IMG_DIR"

# 4. 安装转换依赖（只装一次）
if [ ! -d "$SCRIPT_DIR/node_modules/sharp" ]; then
  echo "📦 首次运行，正在安装图片处理依赖（约 30 秒）..."
  (cd "$SCRIPT_DIR" && npm install sharp --no-fund --no-audit)
fi

# 5. 执行转换
echo ""
echo "🔄 开始转换 WebP（原 JPG 保留不动）..."
node "$SCRIPT_DIR/convert-webp.mjs" "$IMG_DIR"

# 6. 写入 _headers 到仓库根（已有则先备份）
if [ -f "$REPO_ROOT/_headers" ]; then
  cp "$REPO_ROOT/_headers" "$REPO_ROOT/_headers.bak"
  echo "📝 原有 _headers 已备份为 _headers.bak"
fi
cp "$SCRIPT_DIR/_headers" "$REPO_ROOT/_headers"
echo "✅ 缓存头文件已写入仓库根目录"

# 7. 提交并推送
echo ""
echo "📤 正在提交到 Git..."
cd "$REPO_ROOT"
git add -A
git commit -m "perf: 批量生成WebP并配置静态资源长缓存" || echo "（没有需要提交的改动）"

if [ -n "$(git remote)" ]; then
  echo "🚀 正在推送到 GitHub..."
  git push
  echo "✅ 推送完成。Cloudflare Pages / Netlify 会自动重新部署，约 1-2 分钟生效。"
else
  echo "⚠️ 这个仓库还没关联 GitHub 远程地址，代码已在本地提交，未推送。"
fi

echo ""
echo "================================"
echo "  全部完成！"
echo "================================"
