# 椰奶作品集

沿用选定的黑白粉下午茶首页、五杯茶与三块蛋糕插画，以及倒茶、叉蛋糕、标题蛋糕拖尾和音效。已有经历页直接复用原个站的完整 React 组件、图片和 CSS；仅调整目录与返回入口，两个个人账号分开呈现。

## 打开

在本文件夹运行：

```sh
python3 -m http.server 4180 --bind 127.0.0.1 --directory site
```

访问 http://127.0.0.1:4180/ 。重新生成：`node build.mjs`。`site/` 是可独立静态托管的完整网页；`source/` 是可编辑源码，其 node_modules 链接复用原项目依赖，换电脑后需在 source 中安装依赖。

## 入口

| 入口 | 页面 |
| --- | --- |
| 第一杯 | 个人介绍 `/about/` |
| 第二杯 | 服务 IP · 是亮亮 `/liangliang/` |
| 第三杯 | 椰奶没喝饱 `/accounts/` |
| 第四杯 | 摇滚椰奶冻 `/rock/` |
| 第五杯 | MontiRivers 山河集 `/montirivers/` |
| 第一块蛋糕 | 我的小工具 `/tools/` |
| 第二块蛋糕 | 我的 AIGC `/aigc/`，两个明确标为待补充的示例作品位 |
| 第三块蛋糕 | 我的剪辑作品 `/videos/`，两个明确标为待补充的示例作品位 |

顶栏和页底可以返回对应茶杯或蛋糕页面，浏览器后退也会保留入口场景。图片放大、脚本阅读、账号外链、工具入口和本地下载延续原功能。

## 原版保留

原 `app/`、`public/` 和 `output/afternoon-tea/` 均未修改。完整原版快照位置记录在 `backup-location.txt`；`original-files.sha256.json` 用于核对原文件未被修改。快照包含原个站源码、素材、构建配置和下午茶预览，不含账号凭据。

## GitHub Pages

新版独立发布到 https://zhanyina1205-ai.github.io/yenai-portfolio/ ，源码仓库为 https://github.com/zhanyina1205-ai/yenai-portfolio 。原 `personal-website` 仓库和网址保留。

推送 `main` 后，GitHub Actions 会安装锁定依赖、构建、检查九个页面的内部链接与素材，并发布到 Pages。

本地复现 GitHub 构建：

```sh
NEXT_PUBLIC_BASE_PATH=/yenai-portfolio BUILD_OUTPUT_DIR=github-pages node build.mjs
NEXT_PUBLIC_BASE_PATH=/yenai-portfolio BUILD_OUTPUT_DIR=github-pages node verify.mjs
```

本地预览的默认构建仍使用 `node build.mjs` 和 `node verify.mjs`，不会带上 GitHub 子路径。
