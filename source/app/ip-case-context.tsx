import { IpTopsScriptReader } from "./ip-tops-script-reader";
import { DocumentMedia } from "./document-media";
import { IpAudience } from "./ip-audience";
import { IpNoteBreakdown } from "./ip-note-breakdown";
import { IpSelectedWork } from "./ip-selected-work";

const reportUrl = "https://zhanyina1205-ai.github.io/liangliang-ip-report/";

const accounts = [
  { platform: "抖音 · 美妆主号", name: "是亮亮", followers: "199.1", unit: "万", purpose: "美妆教程、发型、好物与 vlog" },
  { platform: "小红书 · 美妆号", name: "是亮亮", followers: "125.1", unit: "万", purpose: "美妆与好物种草" },
  { platform: "小红书 · 穿搭号", name: "涂芷靓", followers: "11.9", unit: "万", purpose: "服饰搭配与整体造型展示", featured: true },
  { platform: "抖音 · 穿搭号", name: "涂芷靓", followers: "12.7", unit: "万", purpose: "服饰展示、穿搭合集与同款种草" },
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
    <p className="source-note ip-data-note">粉丝数快照：抖音 2026.10.31，小红书 2026.10.12，非实时；此处「涂芷靓」为穿搭号，不含同名日常号。各平台粉丝可能重合，不作加总。账号规模与历史增长属于项目背景，我的实际职责为 PR 商务对接、选品搭配和剪辑。</p>

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
          <p>镜号 01—47 · 点击预览完整脚本</p>
        </article>
        <article className="ip-process-card"><div className="ip-process-label"><span>03</span><h5>剪映工程文档</h5></div><DocumentMedia src="/ip-case/jianying-project-01.png" alt="第一条爆款视频的剪映工程截图，展示穿搭素材、字幕分层与剪辑时间线" label="放大工程截图"/><p>点击截图，放大查看 ↗</p></article>
      </div>
    </section>
    <section className="ip-review-spread" id="ip-review"><div className="ip-context-heading review-heading"><h4>我做的 IP 调研与复盘</h4><span>从项目观察，到内容判断</span></div>
    <div className="ip-review-grid">
      <article><span>01 / 内容定位</span><h5>把选题变成具体需求</h5><p>从眼镜党、新手、特定妆效等人群与场景出发，检查标题承诺是否有画面支撑；穿搭则通过固定视角和整体造型形成辨识度。</p></article>
      <article><span>02 / 内容表现</span><h5>同时看爆款与日常表现</h5><p>抖音主号样本中，15 条内容均播 <b>51.3 万</b>、中位数 <b>22.6 万</b>；两条峰值贡献约 <b>66.1%</b> 播放。我的判断是：拆解爆款，也用中位数观察日常表现。</p></article>
      <article><span>03 / 增长观察</span><h5>触达之后，检查关注承接</h5><p>报告显示月连接用户环比 <b>+92%</b>，月涨粉率为 <b>−0.83%</b>。触达扩大与净增粉未同步，下一步可检查关注理由、主页承接与留存。</p></article>
    </div>
    <div className="ip-report-footer"><p className="source-note">播放样本：2026.09.04—10.09；增长指标按报告月度口径。以上为我做的复盘判断，不代表个人增长业绩，也未据此确定涨粉原因。</p><a className="underlined-link" href={reportUrl} target="_blank" rel="noopener noreferrer">查看我做的完整 IP 项目报告 ↗</a></div>
    </section>
  </div>;
}
