import { assetPath } from "./asset-path";

const tools = [
  { id: "01", kind: "wardrobe", label: "FOR MY WARDROBE", title: "穿搭手记", english: "Dress up your day.", description: "把喜欢的衣服，装进自己的灵感衣橱。", tags: "衣橱管理 / 穿搭灵感 / 拍摄计划", image: "/toolbox-visuals/outfit-cart.png", alt: "粉色购物车里散落出黑粉条纹上衣、短裙和袜子", href: "https://zhanyina1205-ai.github.io/outfit-notes/#closet", cta: "打开我的衣橱" },
  { id: "02", kind: "puppy", label: "FOR MY LITTLE ONES", title: "爪爪日记", english: "Little paws, big love.", description: "喂好每一餐，也记住毛孩子的小日常。", tags: "喂食记录 / 鲜食备餐 / 成长日常", image: "/toolbox-visuals/paw-puppy.png", alt: "穿着黑粉条纹毛衣、戴粉色蝴蝶结的拼布小狗", href: "https://zhanyina1205-ai.github.io/paw-diary/", cta: "翻开爪爪日记" },
  {
    id: "03", kind: "radar", label: "FOR MY NEXT STORY",
    title: "选题雷达", english: "On my radar.",
    description: "从热门讨论里，找到下一篇想做的内容。",
    tags: "赛道筛选 / 热点追踪 / 选题收藏",
    image: "/toolbox-visuals/topic-radar.svg", alt: "粉色掌上雷达，扫描线指向屏幕上的星形信号",
    href: "https://zhanyina1205-ai.github.io/topic-radar-demo/", cta: "打开选题雷达",
  },
  {
    id: "04", kind: "capture", label: "FOR MY MATERIALS",
    title: "素材小助手", english: "Capture & collect.",
    description: "截图、录屏，存进项目文件夹或 Eagle 素材库。",
    tags: "Apple 芯片 · macOS 15 或更高版本",
    image: "/toolbox-visuals/material-helper.png", alt: "素材小助手图标：黑色网格上的粉色取景框",
    href: assetPath("/downloads/material-helper-5.0.dmg"), download: "素材小助手-5.0.dmg",
    cta: "下载 Mac 版 5.0",
  },
];

export function Toolbox() {
  return <section className="toolbox-section tools-playground" id="tools" aria-labelledby="tools-title">
    <h2 className="sr-only" id="tools-title">我的小工具</h2>
    <div className="tools-playground-intro"><p>从日常记录到选题和素材收藏，我常用的小工具。</p><span>点击插画，打开工具或下载安装包</span></div>
    <div className="tool-portals">{tools.map(tool => <a className={`tool-portal tool-portal-${tool.kind}`} key={tool.id} href={tool.href} download={tool.download} target={tool.download ? undefined : "_blank"} rel={tool.download ? undefined : "noopener noreferrer"} aria-label={`${tool.title}：${tool.cta}${tool.download ? "（DMG 安装包）" : "（新窗口）"}`}>
      <div className="tool-portal-top"><span>{tool.id} / {tool.label}</span><span aria-hidden="true">✳</span></div>
      <div className="tool-portal-art"><span className="tool-portal-script" aria-hidden="true">{tool.english}</span><img src={assetPath(tool.image)} alt={tool.alt} width={1280} height={1280}/></div>
      <div className="tool-portal-caption"><div><h3>{tool.title}</h3><p>{tool.description}</p></div><span className="tool-portal-arrow" aria-hidden="true">{tool.download ? "↓" : "↗"}</span></div>
      <div className="tool-portal-bottom"><span>{tool.tags}</span><span>{tool.cta} {tool.download ? "↓" : "↗"}</span></div>
    </a>)}</div>
    <div className="tools-playground-footer"><span>MADE FOR THE LITTLE THINGS</span><p>从自己的生活出发，做一点好用的小东西。</p></div>
  </section>;
}
