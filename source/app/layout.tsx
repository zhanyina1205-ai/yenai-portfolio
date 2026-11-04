import type { Metadata } from "next";
import "./globals.css";
import "./yenai-intro.css";
import "./ip-notebook.css";
import "./portfolio-interactions.css";
import "./lookbook.css";
import "./account-collage.css";
import "./note-cards.css";
import "./toolbox.css";
import "./ip-selected-work.css";
import "./ip-case-study.css";
import "./yenai-account-story.css";
import "./brand-and-shop.css";
import "./module-pages.css";
import "./compact-layout.css";
import "./toolbox-visual.css";
import "./module-archive.css";
import "./work-in-progress.css";
import { assetPath } from "./asset-path";

export const metadata: Metadata = {
  icons: { icon: assetPath("/favicon.svg") },
  title: "椰奶作品集",
  description: "詹依娜的个人作品集：IP 穿搭账号商务对接、选品搭配和剪辑经历，个人穿搭账号「椰奶没喝饱_」以及饰品店铺「摇滚椰奶冻」。品牌账号「MontiRivers 山河集」与独立开发的小工具。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head><style>{`@font-face{font-family:NotebookScript;src:url(${assetPath("/fonts/script.woff2")}) format("woff2");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:HuangYou;src:url(${assetPath("/fonts/huangyou.woff2")}) format("woff2");font-style:normal;font-weight:400;font-display:swap}`}</style></head>
      <body>{children}</body>
    </html>
  );
}
