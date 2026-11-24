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
    <div className="ip-account-roles" aria-labelledby="ip-account-roles-title">
      <div className="ip-context-heading"><h4 id="ip-account-roles-title">同一位达人，在两个账号讲什么？</h4><span>人设定位 / 观众需求</span></div>
      <div className="ip-account-role-grid">
        <article aria-labelledby="ip-main-role-title">
          <header><span>01 / 抖音 · 美妆主号</span><h5 id="ip-main-role-title">是亮亮<span>陪你学化妆的闺蜜</span></h5></header>
          <div className="ip-account-role-body">
          <DocumentMedia className="ip-role-profile" src="/ip-case/accounts/liangliang-douyin.jpeg" alt="是亮亮的抖音主页截图" label="放大是亮亮主页"/>
          <dl>
            <div><dt>人设定位</dt><dd>像闺蜜一样陪人学化妆。全程跟练让新手看清每一步，穿搭盲盒则带出她轻松爱玩的另一面。</dd></div>
            <div><dt>观众需求</dt><dd>适合想跟着练全妆，也爱看朋友互动的观众。</dd></div>
          </dl>
          </div>
          <div className="ip-role-metrics"><span>女性粉丝 <b>83.18%</b></span><span>获赞 <b>1.1 亿</b></span></div>
        </article>
        <article aria-labelledby="ip-fashion-role-title">
          <header><span>02 / 抖音 · 穿搭号</span><h5 id="ip-fashion-role-title">涂芷靓<span>可以对照的试衣参考</span></h5></header>
          <div className="ip-account-role-body">
          <DocumentMedia className="ip-role-profile" src="/ip-case/accounts/tuzhijing-douyin.jpeg" alt="涂芷靓的抖音主页截图" label="放大涂芷靓主页"/>
          <dl>
            <div><dt>人设定位</dt><dd>把自己当作试衣参照。简介写明 H 型身材，作品在同一房间展示不同造型，方便比较上身效果。</dd></div>
            <div><dt>观众需求</dt><dd>适合身形相近、想找日常搭配参考的观众。</dd></div>
          </dl>
          </div>
          <div className="ip-role-metrics"><span>女性粉丝 <b>98.44%</b></span><span>获赞 <b>150.5 万</b></span></div>
        </article>
      </div>
    </div>

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
    <section className="ip-editing-project ip-research-process" id="ip-research-process" aria-labelledby="ip-research-title">
      <header><div><span>BEHIND THE SHOOT / 02</span><h4 id="ip-research-title">我怎样筛选对标账号、拆解穿搭选题</h4></div><p>从账号观察，到选题判断</p></header>
      <div className="ip-research-grid">
        <article className="ip-process-card">
          <div className="ip-process-label"><span>01</span><h5>先看账号</h5></div>
          <DocumentMedia className="ip-research-account-preview" src="/ip-case/research/research-01.webp" alt="是亮亮竞品账号分析表，包含账号体量、近30天作品数和最近一条爆款" label="放大账号分析表"/>
          <p>对照账号体量、近 30 天作品数和最近一条爆款，选择值得持续观察的账号。</p>
        </article>
        <article className="ip-process-card">
          <div className="ip-process-label"><span>02</span><h5>再看单条作品</h5></div>
          <DocumentMedia className="ip-research-work-preview" src="/ip-case/research/research-02.webp" alt="对标穿搭作品拆解表，记录拍摄场景、呈现方式和核心单品" label="放大作品拆解表"/>
          <p>逐条标记拍摄场景、呈现方式和核心单品。例如，旅行度假是场景，快切换装是拍法，两者可以组合成一个选题。</p>
        </article>
        <article className="ip-process-card ip-research-library">
          <div className="ip-process-label"><span>03</span><h5>我的穿搭选题库</h5></div>
          <DocumentMedia src="/ip-case/research/research-03.png" alt="是亮亮穿搭选题库，包含30条候选选题及定位匹配、获得感、拍摄可行性和热度评分" label="放大穿搭选题库"/>
          <p>我把候选选题整理成表，按账号定位、观众能学到什么、拍摄可行性和热度打分，再比较哪些值得先拍。</p>
          <p className="ip-research-hint">30 条选题 · 点击截图可放大 ↗</p>
        </article>
      </div>
    </section>
  </div>;
}
