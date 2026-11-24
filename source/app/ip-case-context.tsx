import { IpTopsScriptReader } from "./ip-tops-script-reader";
import { DocumentMedia } from "./document-media";
import { IpAudience } from "./ip-audience";
import { IpNoteBreakdown } from "./ip-note-breakdown";
import { IpSelectedWork } from "./ip-selected-work";

const accounts = [
  { platform: "抖音 · 美妆主号", name: "是亮亮", followers: "199.1", unit: "万", purpose: "美妆教程、发型、好物与 vlog" },
  { platform: "小红书 · 美妆号", name: "是亮亮", followers: "125.1", unit: "万", purpose: "美妆与好物种草" },
  { platform: "小红书 · 穿搭号", name: "涂芷靓", followers: "11.9", unit: "万", purpose: "服饰搭配与整体造型展示", featured: true },
  { platform: "抖音 · 穿搭号", name: "涂芷靓", followers: "12.7", unit: "万", purpose: "服饰展示、穿搭合集与同款种草", featured: true },
];

export function IpCaseContext() {
  return <div className="ip-case-context">
    <section className="ip-positioning-spread" id="ip-positioning"><div className="ip-context-heading"><h4>账号定位与矩阵</h4><span>项目背景 / 两个平台，两个内容侧重</span></div>
    <p className="ip-positioning">以美妆方法建立内容价值，通过穿搭与日常延伸个人审美。「是亮亮」与「涂芷靓」分别承担方法讲解与造型种草，让审美形成连续的内容体验。</p>
    <div className="ip-account-matrix">{accounts.map(account => <article key={account.platform} className={account.featured ? "featured-account" : undefined}>
      <span className="matrix-platform">{account.platform}</span>
      <h5>{account.name}</h5>
      <p className="matrix-followers">{account.followers}<span>{account.unit}粉丝</span></p>
      <p className="matrix-purpose">{account.purpose}</p>
      {account.featured && <span className="matrix-role">我主要负责的账号 ↗</span>}
    </article>)}</div>

    </section>
    <IpAudience/>
    <IpSelectedWork/>
    <IpNoteBreakdown/>
    <section className="ip-editing-project" id="ip-editing-project" aria-labelledby="ip-editing-title">
      <header><div><span>BEHIND THE CONTENT / 01</span><h4 id="ip-editing-title">《亲测！都是我出了1w张神图的漂亮小吊带们！》的创作过程</h4></div><p>从搭配，到脚本，再到剪辑</p></header>
      <div className="ip-process-grid">
        <article className="ip-process-card">
          <div className="ip-process-label"><span>01</span><h5>搭配图片</h5></div>
          <DocumentMedia className="ip-outfit-preview" src="/ip-case/outfits-01.png" previewSrc="/ip-case/outfits-01-preview.jpg" alt="第一条爆款视频的七套夏日穿搭平铺图，包含服装、鞋包与配饰" label="放大搭配图片"/>
          <p>七套穿搭 · 点击查看大图 ↗</p>
        </article>
        <article className="ip-process-card">
          <div className="ip-process-label"><span>02</span><h5>脚本</h5></div>
          <IpTopsScriptReader/>
          <p>点击预览完整脚本截图 ↗</p>
        </article>
        <article className="ip-process-card"><div className="ip-process-label"><span>03</span><h5>剪映工程文档</h5></div><DocumentMedia src="/ip-case/jianying-project-01.png" alt="第一条爆款视频的剪映工程截图，展示穿搭素材、字幕分层与剪辑时间线" label="放大工程截图"/><p>点击截图，放大查看 ↗</p></article>
      </div>
    </section>
  </div>;
}
