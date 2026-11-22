import os
from PIL import Image

# 图片目录
img_dir = "./img"
# 质量 0-100，外贸家具图80合适
quality = 80

for root, dirs, files in os.walk(img_dir):
    for fname in files:
        lower_name = fname.lower()
        if lower_name.endswith((".jpg", ".jpeg", ".png")):
            src_path = os.path.join(root, fname)
            dst_path = os.path.join(root, os.path.splitext(fname)[0] + ".webp")
            if os.path.exists(dst_path):
                continue
            try:
                im = Image.open(src_path)
                im.save(dst_path, "webp", quality=quality)
                print(f"✅ 已生成：{dst_path}")
            except Exception as e:
                print(f"❌ 失败 {src_path} : {e}")
print("全部处理完成！")
