#!/usr/bin/env node
// 批量把 JPG/JPEG 转成同名 WebP，原图保留不动。
// 用法: node convert-webp.mjs [图片目录] [--force]
// 默认目录 = 当前目录；--force 覆盖已存在的 webp。

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const QUALITY = 80;        // 画质，家具图够用，别再调高否则体积下不来
const MAX_WIDTH = 1200;    // 长边最大像素，不放大已有图片
const exts = ['.jpg', '.jpeg', '.JPG', '.JPEG'];

const args = process.argv.slice(2);
const force = args.includes('--force');
const targetDir = args.find(a => !a.startsWith('--')) || process.cwd();

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
      out.push(...await walk(full));
    } else if (exts.includes(path.extname(e.name))) {
      out.push(full);
    }
  }
  return out;
}

function kb(n) { return (n / 1024).toFixed(1) + ' KB'; }

async function main() {
  const files = await walk(targetDir);
  console.log(`\n找到 ${files.length} 张 JPG，目录：${targetDir}\n`);

  let ok = 0, skip = 0, fail = 0;
  let before = 0, after = 0;
  const failures = [];

  for (const src of files) {
    const webp = src.replace(/\.(jpg|jpeg|JPG|JPEG)$/, '.webp');
    try {
      if (!force) {
        await fs.access(webp);
        skip++;
        continue;
      }
    } catch { /* 不存在，继续转换 */ }

    try {
      const srcStat = await fs.stat(src);
      await sharp(src, { autoOrient: true })
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(webp);
      const webpStat = await fs.stat(webp);
      before += srcStat.size;
      after += webpStat.size;
      ok++;
      console.log(`✅ ${path.relative(targetDir, src)}  ${kb(srcStat.size)} → ${kb(webpStat.size)}`);
    } catch (err) {
      fail++;
      failures.push(path.relative(targetDir, src));
      console.log(`❌ 损坏/打不开，已跳过：${path.relative(targetDir, src)}  (${err.message.split('\n')[0]})`);
    }
  }

  console.log(`\n========== 汇总 ==========`);
  console.log(`成功转换：${ok} 张｜已存在跳过：${skip} 张｜失败：${fail} 张`);
  if (ok > 0) {
    console.log(`体积合计：${kb(before)} → ${kb(after)}，减小 ${(100 - after / before * 100).toFixed(0)}%`);
  }
  if (failures.length) {
    console.log(`\n以下图片可能已损坏，请在本地重新导出：`);
    failures.forEach(f => console.log(`  - ${f}`));
  }
  console.log(`\n原 JPG 全部保留，没有被改动。\n`);
}

main().catch(err => { console.error(err); process.exit(1); });
