import { GoldScriptReader } from "./gold-script-reader";
import { assetPath } from "./asset-path";
import { DocumentMedia } from "./document-media";

const external = { target: "_blank", rel: "noopener noreferrer" };
const brandSource = "https://mcn7qru2e05g.feishu.cn/docx/EXhUdHPiZokwf5x6XAuc8cirnah";
const matrixSource = "https://gcn0sluri72f.feishu.cn/docx/Apo4dK2l8oVlA4xaOL5ciDAbnag";
const rockNotes = [
  { title: "欧米加…十字架项链🖤也太百搭了吧‼️", href: "AmVnXFs8V9C", likes: "1,128", saves: "343", tag: "一条项链，多套搭配" },
  { title: "十字架项链搭小吊带也太辣啦🥵", href: "8MASvhj1rwe", likes: "1,397", saves: "510", tag: "上身实拍，直接种草" },
  { title: "好爱黑色系 🖤", href: "9o7eUt8huJA", likes: "1,260", saves: "443", tag: "黑色穿搭，强化风格" },
  { title: "欧米加…叠戴十字架项链也泰酷辣🥵", href: "4L9nKEzqfIU", likes: "751", saves: "228", tag: "叠戴示范，给出答案" },
];
export function RockAccount() {
  return <section className="rock-case" id="rock-account" aria-labelledby="rock-title">
    <div className="case-meta"><span>02 / MY OWN ACCOUNTS</span><span>穿搭内容 → 饰品生意</span></div>
    <header className="rock-header"><div><p className="case-script">My little business.</p><h3 id="rock-title">摇滚椰奶冻<span>🥥</span></h3><p>从粉丝问“项链在哪买”，到自己经营一家小店。</p></div><a className="rock-profile" href="https://xhslink.cn/o/7fHIjh5lHki" {...external}><img src={assetPath('/rock-account/avatar.jpg')} alt="摇滚椰奶冻头像"/><span>朋克 · 甜酷 · 平价饰品<small>逛逛我的店铺 ↗</small></span></a></header>
    <div className="rock-overview"><div className="rock-metrics"><div><b>676</b><span>粉丝</span></div><div><b>1.3万</b><span>获赞与收藏</span></div><div><b>15</b><span>商品（截图时）</span></div></div><div className="rock-position"><span>给谁看 / 内容定位判断</span><p>喜欢黑色系、甜酷穿搭，想用平价配饰完成造型的人。</p></div><div className="rock-result"><strong>5,000+<small>单</small> / 10万+<small>元</small></strong><span>个人自述累计销量 / 销售额</span></div></div>
    <div className="rock-notes-label"><h4>把“怎么搭”，拍成购买理由。</h4><span>4 篇代表内容 · 点击查看笔记 ↗</span></div>
    <div className="rock-note-grid">{rockNotes.map((note,i)=><a className="rock-note-card" key={note.href} href={`https://xhslink.cn/o/${note.href}`} {...external}><div className="rock-note-cover"><img src={assetPath(`/rock-account/note-${i+1}.jpg`)} alt={note.title} loading="lazy"/><span>↗</span></div><div className="rock-note-copy"><small>{note.tag}</small><h5>{note.title}</h5><div className="case-note-stats"><span>♡ {note.likes}<small>赞</small></span><span>☆ {note.saves}<small>藏</small></span></div></div></a>)}</div>
    <div className="rock-workflow"><span>我独立完成</span><ol>{['选品 / 供应链','定价 / 上架','搭配 / 实拍','剪辑 / 发布','店铺运营'].map((s,i)=><li key={s}><small>0{i+1}</small>{s}</li>)}</ol></div>
    <details className="case-source"><summary>数据口径与账号分析</summary><p>粉丝、获赞与收藏、商品数来自账号主页截图，反映截图时状态；笔记赞藏数据核对于 2026.11.02。销量与销售额沿用个人文档的累计自述，未作为后台审计数据。这四篇为我选出的高转化代表内容；未提供订单归因数据，因此不展示转化率。受众为基于商品定位、穿搭与标题的判断，不是粉丝后台画像。</p><p>内容方法：用自己的穿搭展示真实佩戴效果；用多套搭配说明百搭性；用叠戴示范减少搭配犹豫。</p></details>
  </section>;
}
const brandNotes = [
  {id:'6a69f1bc000000000f007001',title:'请查收金色盛夏的邀约',label:'01 / 预告',likes:'3,309',saves:'280',text:'18 秒竖版，先用情绪与局部留住注意。'},
  {id:'6a6b584d00000000290321b0',title:'阅读一篇黄金',label:'02 / 品牌正片',likes:'3,023',saves:'187',text:'横版正片置顶，建立品牌的视觉记忆。'},
  {id:'6a71e813000000002c00316f',title:'让天地成为金石的语言',label:'03 / 产品短片',likes:'1,748',saves:'199',text:'17 秒竖版，把视线落到珠宝与佩戴。'},
];
const staff = [
  {name:'Carrie',fans:612,likes:'2,398',id:'690cd5ff000000003702dbf6',label:'品牌表达 · 成套佩戴'},
  {name:'Jenny',fans:318,likes:'1,814',id:'6a72b28b0000000013022c0a',label:'深圳门店 · 产品展示'},
  {name:'Celia',fans:78,likes:'387',id:'6921c403000000003702abd3',label:'私人顾问 · 单品细节'},
  {name:'Krystal',fans:67,likes:'570',id:'6a34fa200000000010000800',label:'工艺表达 · 材质答疑'},
  {name:'Emma',fans:72,likes:'544',id:'674d4535000000001c01a13f',label:'深圳门店 · 日常佩戴'},
  {name:'Laura',fans:18,likes:'136',id:'5ab5bda311be10018cfe66f3',label:'产品展示 · 到店线索'},
];
export function MontiriversCase() {
return <article className="monti-case" id="montirivers" aria-labelledby="monti-title">
  <section className="monti-page monti-overview">
    <div className="case-meta"><span>03 / BRAND ACCOUNT</span><span>2026.06—09 · 内容策划 / 账号运营</span></div>
    <div className="monti-hero"><div className="monti-hero-copy"><p className="case-script">A poem in gold.</p><h3 id="monti-title">MontiRivers<span>山河集</span></h3><p className="monti-lead">把黄金，写成一首<br/>可以佩戴的当代诗。</p><div className="monti-tags"><span>岭南文化</span><span>自然意象</span><span>当代手作</span></div><p className="monti-brief">参与初创品牌从 0 到 1 的内容建设，<br/>从单品展示，走向有辨识度的品牌表达。</p><a href="https://www.xiaohongshu.com/user/profile/682d4255000000000601fa43" {...external}>查看品牌账号 ↗</a></div><figure><DocumentMedia src="/montirivers/brand-1.jpg" alt="MontiRivers山河集自然场景佩戴形象图"/><figcaption>东方之韵 / 当代之形</figcaption></figure></div>
    <div className="monti-summary"><div className="monti-account-numbers"><div><b>2,074</b><span>官方号粉丝</span></div><div><b>1.56万</b><span>获赞与收藏</span></div><div><b>122</b><span>累计笔记</span></div></div><div className="monti-audience"><span>目标受众 / 策略判断</span><p>深圳都市女性 · 约 25—40 岁<br/>在意设计、东方美学与日常佩戴感</p><div><span>悦己通勤</span><span>婚嫁三金</span><span>节日赠礼</span></div></div></div>
    <div className="monti-peers"><div><span>竞品看什么</span><h4>取方法，留住自己的调性。</h4></div><ul><li><b>寶蘭</b><span>诗化影像<br/>少发精发</span></li><li><b>琳朝</b><span>工艺叙事<br/>预告＋正片</span></li><li><b>YIN隐</b><span>当代设计<br/>定位之外要有内容</span></li><li><b>文博金</b><span>同城同期<br/>店员号矩阵</span></li></ul></div>
    <p className="case-caption">账号快照：2026.11.01；受众为门店位置、内容与评论推断，非后台画像。图片来自品牌公开报道。</p>
  </section>
  <section className="monti-page monti-work" id="montirivers-work">
    <div className="case-meta"><span>FROM 0 TO 1 / MY ROLE</span><span>从“产品图”，到“品牌诗集”</span></div>
    <header className="monti-heading"><div><p className="case-script">Make it seen.</p><h4>我做了什么</h4></div><p>6—9 月官方内容由我经手，<br/>负责内容策划、栏目组织与账号运营。</p><div className="monti-work-total"><b>33<small>篇</small></b><span>27 篇图文 / 6 条视频</span></div></header>
    <ol className="monti-flow"><li><span>01 / 定位</span><b>先统一品牌语言</b><p>自然意象、诗化短句，确定官方号的表达。</p></li><li><span>02 / 栏目</span><b>让内容成为系列</b><p>品牌故事、系列篇、节气、戴上它的人。</p></li><li><span>03 / 发布</span><b>把节点做成组合</b><p>预告 → 正片 → 产品短片，串起一轮发布。</p></li><li><span>04 / 复盘</span><b>从好看到有用</b><p>对照赞藏与提问，把选购信息接给顾问号。</p></li></ol>
    <div className="monti-note-grid">{brandNotes.map((n,i)=><a className="monti-note" key={n.id} href={`https://www.xiaohongshu.com/explore/${n.id}`} {...external}><div className="monti-note-image"><img src={assetPath(`/montirivers/note-${i+1}.jpg`)} alt={`山河集视频封面：${n.title}`} loading="lazy"/><span className="monti-play" aria-label="打开视频笔记">↗</span><span className="monti-note-index">{n.label}</span></div><div className="monti-note-copy"><h5>{n.title}</h5><p>{n.text}</p><div className="case-note-stats"><span>♡ {n.likes}<small>赞</small></span><span>☆ {n.saves}<small>藏</small></span></div></div></a>)}</div>
    <section className="monti-process" id="montirivers-gold-process" aria-labelledby="monti-process-title">
      <header className="gold-heading"><div><small>无尽夏系列 · 品牌正片</small><h4 id="monti-process-title">《阅读一篇黄金》创作过程</h4></div><span aria-hidden="true">Production notes.</span></header>
      <div className="gold-cards">
        <article className="gold-card gold-concept">
          <header><i>01</i><h5>内容策划</h5></header>
          <div className="gold-frames">{["山雾","人物","山野"].map((name,i)=><img key={name} src={assetPath(`/montirivers/gold-script/frame-${i+1}.webp`)} alt={name+"分镜参考"} loading="lazy"/>)}</div>
          <strong>从山雾到金饰</strong><p>以罗浮山云雾开场，沿模特的视线切到颈间的花形金项链。</p>
        </article>
        <article className="gold-card gold-script">
          <header><i>02</i><h5>视频脚本</h5><small>24 镜</small></header>
          <GoldScriptReader/>
          <a className="gold-source" href="https://gcn0sluri72f.feishu.cn/docx/Qf84dR6Kxorq69xP3hscu1ZEnWe?from=from_copylink" {...external}>飞书原稿 ↗</a>
        </article>
        <article className="gold-card gold-project">
          <header><i>03</i><h5>工程文档</h5></header>
          <DocumentMedia src="/montirivers/gold-script/editing-timeline.png" previewSrc="/montirivers/gold-script/editing-preview.jpg" alt="《阅读一篇黄金》剪映工程：素材、成片预览、分镜时间线与原片声音轨" label="放大剪映工程截图"/>
          <p>剪映工程 · 点击查看大图</p>
        </article>
      </div>
    </section>
    <div className="monti-learning"><div><b>12,037<span>赞</span></b><b>1,643<span>藏</span></b><small>33 篇内容累计表现*</small></div><p><strong>我的复盘：</strong>品牌片获得更多互动；系列与选购内容，让“好看”更接近“想戴”。</p></div>
    <details className="case-source"><summary>工作范围、数据与完整复盘 ↗</summary><p>职责依据个人复盘：2026 年 6—9 月在深圳市山河集文化有限公司负责内容策划与账号运营；不据此认定全部影像均为本人独立拍摄。33 篇内容累计赞藏统计于 2026.11.01；三条卡片数据核对于 2026.11.02。发布期另有 KOC 与快闪活动，不能把全部增长归因于单一内容动作。未获取曝光、投放、私信与成交数据。</p><a href={brandSource} {...external}>阅读起号与脚本复盘 ↗</a></details>
  </section>
  <section className="monti-page monti-backstage" id="montirivers-backstage" aria-labelledby="monti-backstage-title">
    <div className="case-meta"><span>BEHIND THE SCENES / MONTIRIVERS</span><span>镜头背后 · 品牌现场</span></div>
    <div className="monti-backstage-layout">
      <header className="monti-backstage-heading"><p className="case-script">Behind the scenes.</p><h4 id="monti-backstage-title">拍摄花絮<span>与品牌现场</span></h4><p>从自然里的影像，<br/>到门店里的一杯下午茶。</p><span className="monti-backstage-mark" aria-hidden="true">✳</span><small>点击相片，查看大图 ↗</small></header>
      <div className="monti-backstage-photos">
        <figure><DocumentMedia src="/montirivers/behind-scenes/meadow-shoot.jpg" alt="山河集外景拍摄花絮：模特与摄影师，原片经 AI 扩图调整构图" label="放大相片"/><figcaption><span>01 / ON LOCATION</span><h5>拍摄花絮</h5><p>自然场景里的品牌影像</p></figcaption></figure>
        <figure><DocumentMedia src="/montirivers/behind-scenes/tangsuo-afternoon-tea.jpg" alt="达人探店时品牌合作的瑭所下午茶" label="放大相片"/><figcaption><span>02 / BRAND COLLABORATION</span><h5>瑭所下午茶</h5><p>达人探店时的品牌合作</p></figcaption></figure>
      </div>
    </div>
  </section>
  <section className="monti-page monti-matrix" id="montirivers-matrix">
    <div className="case-meta"><span>ONE BRAND / SIX VOICES</span><span>我管理过的店员账号</span></div>
    <header className="monti-heading"><div><p className="case-script">Closer to people.</p><h4>让品牌，有人回应。</h4></div><p>官方号建立审美，顾问号补充实戴与选购。<br/>把内容与深圳门店连接起来。</p></header>
    <div className="monti-matrix-layout"><div className="monti-store"><DocumentMedia src="/montirivers/brand-2.jpg" alt="山河集深圳平安金融中心门店与黄金陈列"/><div className="monti-matrix-totals"><span><b>6</b>个店员账号</span><span><b>1,165</b>粉丝加总</span><span><b>5,849</b>赞藏加总</span></div><div className="monti-route"><h5>我设计的内容承接路径</h5><p>内容种草 <i>→</i> 进入主页 <i>→</i> 私信 / 顾问<br/>到店看货 <i>→</i> 晒单回流</p><small>路径设计，非已验证的成交漏斗</small></div><div className="monti-signal"><span>可见的需求信号</span><p>“多少钱？” “足金还是 18K？” “怎么买？”</p><small>公开评论已经出现选购提问；下一步是把咨询承接做好。</small></div></div><div className="monti-staff-grid">{staff.map((s,i)=><a key={s.name} href={`https://www.xiaohongshu.com/user/profile/${s.id}`} {...external}><div className="monti-staff-top"><span>0{i+1}</span><b>{s.name}</b><i>↗</i></div><p>{s.label}</p><div className="monti-staff-bar" role="img" aria-label={`${s.name}：${s.fans}粉丝`}><i style={{width:`${s.fans/612*100}%`}}/></div><div className="monti-staff-values"><span><b>{s.fans}</b> 粉丝</span><span><b>{s.likes}</b> 赞藏</span></div></a>)}</div></div>
    <div className="monti-matrix-bottom"><p><b>我留下的下一步：</b>统一品牌名称与门店入口，让不同顾问号提供不同的选购价值。</p><a href={matrixSource} {...external}>看店员账号分析 ↗</a></div>
    <details className="case-source"><summary>资料来源与统计说明</summary><p>六号数据核查于 2026.11.01，粉丝简单相加、未去重；赞藏为平台合计项。展示当前账号快照，不等同于本人任职期间的增长成果。卡片标签概括可见主页与内容，非六号已执行的固定分工。近 10 条非置顶笔记点赞中位数为 4.5—7.5；历史高赞内容不代表日常水平。没有后台私信、预约与成交数据。</p><a href={brandSource} {...external}>品牌与起号复盘 ↗</a><a href="https://mcn7qru2e05g.feishu.cn/base/F6ZubiRN2aThz8sJ8V7cgSjanEg" {...external}>竞品资料 ↗</a><a href="https://www.jiemian.com/article/14850491.html" {...external}>品牌图片来源 ↗</a></details>
  </section>
</article>;
}
