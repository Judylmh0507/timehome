import os
import re

for root, _, files in os.walk("."):
    for f in files:
        if f.endswith(".html"):
            fp = os.path.join(root, f)
            with open(fp, "r", encoding="utf-8") as fr:
                text = fr.read()
            # 只给没有loading属性的img添加懒加载
            new_text = re.sub(r'<img(?![^>]*loading=)([^>]*?)>', r'<img\1 loading="lazy">', text)
            if new_text != text:
                with open(fp, "w", encoding="utf-8") as fw:
                    fw.write(new_text)
                print(f"✅ 已处理：{fp}")
print("懒加载添加完成！")
