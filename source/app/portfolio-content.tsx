import { RockAccount } from "./brand-and-shop";
import { assetPath } from "./asset-path";
import { DocumentMedia } from "./document-media";
import { NoteCards } from "./note-cards";
import { Lookbook } from "./lookbook";
import { YenaiAudience, YenaiOriginStory } from "./yenai-account-story";
import { AccountCollage } from "./account-collage";
import { CopyEmail } from "./portfolio-interactions";

const documentUrl="https://my.feishu.cn/wiki/O6kZwoRPLiphBykwHiKcOgbTnld?from=from_copylink";
const workflow=[{title:"选题",text:"找热门笔记作为参考依据。"},{title:"选品搭配",text:"参考热门单品，搭配成自己的风格。"},{title:"拍摄",text:"对镜拍、支架前置拍、户外拍。"},{title:"修图剪辑",text:"使用剪映、Remotion 完成内容制作。"},{title:"发布",text:"发布到小红书、抖音。"}];


export function Biography(){return <>
   <section className="about-file" id="about" aria-labelledby="about-title">
    <div className="folder-body"><div className="file-heading"><span>ABOUT ME</span><span>个人档案 / 01</span></div><div className="about-grid"><figure className="about-portrait"><span className="binder-clip" aria-hidden="true"/><DocumentMedia src="/new-document/about-portrait-dog.jpg" alt="詹依娜与小狗的合照" className="about-photo"/><figcaption>HI, I&apos;M YINA.<span className="about-photo-hint">点开看原图 ↗</span></figcaption></figure><div className="about-copy"><p className="eyebrow">你好，欢迎认识我。</p><h2 id="about-title">詹依娜<span>椰奶 / YINA</span></h2><dl className="personal-facts"><div><dt>年龄</dt><dd>23 岁</dd></div><div><dt>籍贯</dt><dd>广东深圳</dd></div><div><dt>教育背景</dt><dd>广州美术学院<br/><span>产品设计专业</span></dd></div></dl><div className="personal-tags"><span>INFP</span><span>手工绘画爱好者</span><span>两只小狗的全职铲屎官</span></div><p className="about-summary">有 IP 穿搭账号的商务对接、选品搭配与剪辑经历，<br className="desktop-break"/>也独立经营自己的穿搭账号与饰品店铺。</p><a className="underlined-link" href={documentUrl} target="_blank" rel="noopener noreferrer">阅读我的个人文档 ↗</a></div></div></div>
   </section>




</>;}
export function CreationWorkflow(){return (
   <section className="workflow-section section-pad" id="workflow" aria-labelledby="workflow-title"><div className="section-kicker"><span>03 / HOW I WORK</span><span>从选题，到发布</span></div><h2 className="display-title" id="workflow-title">我的创作流程<span>THE PROCESS</span></h2><div className="workflow-list">{workflow.map((item,index)=><article key={item.title}><span className="step-number">0{index+1}/</span><h3>{item.title}</h3><p>{item.text}</p>{index<workflow.length-1&&<span className="step-arrow" aria-hidden="true">→</span>}</article>)}</div><div className="support-grid"><div className="support-intro"><p>从品牌合作到个人创作，<br/>这些是我实际做过的工作。</p><a href={assetPath("/#tea")}>回看我的项目 <span>↗</span></a></div><div className="support-cards"><article><span>1/</span><h3>商务对接</h3><p>IP 穿搭账号<br/>PR 合作沟通</p></article><article><span>2/</span><h3>选品搭配</h3><p>服装与饰品<br/>选品、风格搭配</p></article><article><span>3/</span><h3>拍摄剪辑</h3><p>多种拍摄方式<br/>剪映 / Remotion</p></article><article><span>4/</span><h3>独立经营</h3><p>个人账号与店铺<br/>供应链、定价、上架</p></article></div></div></section>
);}
export function PersonalAccounts({includeRock=true}:{includeRock?:boolean}){return <>
    <article className="own-project" id="yenai-account"><div className="own-project-copy"><p className="eyebrow">02 / MY OWN ACCOUNT</p><h3>椰奶没喝饱_<span>小红书穿搭账号</span></h3><div className="style-journey"><div><span>学生时期</span><h4>美式甜心辣妹</h4><p>以学生党人设为主。</p></div><span className="journey-arrow" aria-hidden="true">↘</span><div><span>毕业之后</span><h4>姐系通勤感</h4><p>面向刚步入社会的女生，提升穿衣质感。</p></div></div><dl className="account-stats"><div><dt>粉丝</dt><dd>5.2<span>万</span></dd></div><div><dt>获赞与收藏</dt><dd>92.4<span>万</span></dd></div></dl><p className="source-note">小红书账号主页 · 2026.11.01 截图</p><a className="pink-button" href="https://xhslink.cn/o/ArBwd7GjccM" target="_blank" rel="noopener noreferrer">打开我的穿搭账号 <span>↗</span></a><nav className="yenai-account-links" aria-label="个人账号内容"><a href="#yenai-audience">我的受众 ↗</a><a href="#yenai-origin">从零起号 ↗</a></nav></div><AccountCollage/></article>
    <YenaiAudience/>
    <YenaiOriginStory/>
    <Lookbook/>
    <NoteCards/>
    <CreationWorkflow/>

    {includeRock && <RockAccount/>}

</>;}
export function PortfolioCover(){return <>
   <section className="hero" aria-labelledby="hero-title">
    <div className="hero-label"><span>PERSONAL PORTFOLIO</span><span>CONTENT / STYLE / IP</span></div>
    <h1 id="hero-title">Portfolio<span className="sr-only"> · 詹依娜的个人作品集</span></h1>
    <div className="paper-stack">
     <div className="paper-layer paper-back-one" aria-hidden="true"/><div className="paper-layer paper-back-two" aria-hidden="true"/>
     <div className="front-sheet"><div className="paper-holes" aria-hidden="true"><i/><i/><i/></div><span className="sheet-index">YINA / PERSONAL FILE 001</span>
      <figure className="portrait-card"><span className="paperclip" aria-hidden="true"/><div className="portrait-image"><img src={assetPath("/new-document/portrait-cover-clean.png")} alt="詹依娜的人像照片" width={1254} height={1254} fetchPriority="high"/></div><figcaption>詹依娜 <span>也可以叫我椰奶</span></figcaption></figure>
      <div className="sheet-copy"><p>Zhan YIna</p><span>广州美术学院 · 产品设计专业<br/>个人作品集</span><div className="sheet-rule"/><small>商务对接 / 选品搭配 / 拍摄剪辑</small></div>
     </div>
    </div>
    <div className="hero-footer"><span>ZHAN YINA<br/><small>广东 · 深圳</small></span><a href="#modules" className="scroll-prompt">EXPLORE MY WORK <span>↓</span></a><span>2026<br/><small>PORTFOLIO</small></span></div>
   </section>


</>;}
export function Contact(){return <>
   <section className="contact section-pad" id="contact" aria-labelledby="contact-title"><div className="section-kicker"><span>05 / SAY HELLO</span><span>期待与你交流</span></div><div className="contact-layout"><div><h2 id="contact-title">下一次，<br/>一起做点好内容。</h2><a className="email-link" href="mailto:1106731983@qq.com">1106731983@qq.com <span>↗</span></a><CopyEmail email="1106731983@qq.com"/></div><div className="contact-mark" aria-hidden="true"><span>Y</span><span>✦</span></div></div><div className="footer-line"><a href="#top">詹依娜 / YINA ZHAN</a><p>© 2026 · 个人作品集</p><a href="#top">回到顶部 ↑</a></div></section>
</>;}
