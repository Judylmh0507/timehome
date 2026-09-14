# img/ 目录图片清单

本目录放产品图片与分类封面图。文件名必须与 products.js 里的 cover / images 一致。

## 已录入产品 I74-915 (Napa Rec.Sofa Table) 需要的文件：
- I74-915-1.jpg  (封面图 / 白底主图)
- I74-915-2.jpg ~ I74-915-9.jpg  (实拍 / 细节 / 瑕疵展示)
- I74-915.mp4  (产品短视频，可选；无则 products.js 里 video 字段留空)

## 分类封面图（4 张，对应首页 4 个分类卡片）：
- cat-living.jpg
- cat-dining.jpg
- cat-study.jpg
- cat-bedroom.jpg

## 命名规则：
- SKU 主图：{SKU}-1.jpg, {SKU}-2.jpg ...
- 封面图 = images 数组第一项 = cover 字段
- 建议单张压缩到 150-300KB，避免首页加载过慢

## 注意：
真实照片放好后，删除所有 .expected 占位文件（如有）。
