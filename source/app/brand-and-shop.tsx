import { GoldScriptReader } from "./gold-script-reader";
import { assetPath } from "./asset-path";
import { DocumentMedia } from "./document-media";

const external = { target: "_blank", rel: "noopener noreferrer" };
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
    <div className="monti-peers monti-peers-expanded"><div><span>竞品看什么</span><h4>取方法，留住自己的调性。</h4></div><ul><li><b>老铺黄金</b><span>克制的产品画面<br/>古法质感特写</span></li><li><b>君佩珠宝</b><span>刻丝细节特写<br/>系列寓意表达</span></li><li><b>多宝阁</b><span>多宝配色呈现<br/>东方纹样叙事</span></li><li><b>琳朝</b><span>记录制作过程<br/>微距呈现手工</span></li></ul></div>
    <div className="monti-content-method"><div><span>01 / 特写</span><h5>让工艺被看清</h5><p>用特写呈现金饰的纹理与工艺，把产品细节放进品牌表达。</p></div><div><span>02 / 试戴</span><h5>让设计落在身上</h5><p>用试戴画面展示设计细节，让顾客看到佩戴比例和上身效果。</p></div></div>
  </section>
  <section className="monti-page monti-work" id="montirivers-work">
    <div className="case-meta"><span>FROM 0 TO 1 / MY ROLE</span><span>从“产品图”，到“品牌诗集”</span></div>
    <header className="monti-heading"><div><p className="case-script">Make it seen.</p><h4>我做了什么</h4></div><p>2026.06—2026.09<br/>深圳市山河集文化有限公司 · 内容运营</p><div className="monti-work-total"><b>33<small>篇</small></b><span>27 篇图文 / 6 条视频</span></div></header>
    <div className="monti-role-scope">
      <div><span>01 / 官方号</span><h5>选题、文案与剪辑</h5><p>负责官方账号内容策划、栏目组织与账号运营。</p></div>
      <div><span>02 / 门店</span><h5>指导店员拍摄</h5><p>把品牌要求拆成具体拍摄标准，帮助店员呈现产品。</p></div>
      <div><span>03 / KOL</span><h5>审核选题、脚本与成片</h5><p>从内容方向到最终画面，核对品牌表达与产品细节。</p></div>
    </div>
    <div className="monti-tenure-growth">
      <div><span>任职期间 · 官方号粉丝变化</span><p>从起步阶段，逐步积累品牌关注。</p></div>
      <strong><small>约</small> 500 <small>人</small><i>→</i>2,000 <small>余人</small></strong>
    </div>
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
  </section>
  <section className="monti-page monti-backstage" id="montirivers-backstage" aria-labelledby="monti-backstage-title">
    <div className="case-meta"><span>BEHIND THE SCENES / MONTIRIVERS</span><span>镜头背后 · 品牌现场</span></div>
    <div className="monti-backstage-layout">
      <header className="monti-backstage-heading"><p className="case-script">Behind the scenes.</p><h4 id="monti-backstage-title">拍摄花絮<span>与品牌现场</span></h4><p>从自然里的影像，<br/>到门店里的一杯下午茶。</p><span className="monti-backstage-mark" aria-hidden="true">✳</span><small>点击相片，查看大图 ↗</small></header>
      <div className="monti-backstage-photos">
        <figure><DocumentMedia src="/montirivers/behind-scenes/meadow-shoot-original.png" alt="山河集外景拍摄花絮：身穿白裙的模特在草地上拍摄" label="放大相片"/><figcaption><span>01 / ON LOCATION</span><h5>拍摄花絮</h5><p>自然场景里的品牌影像</p></figcaption></figure>
        <figure><DocumentMedia src="/montirivers/behind-scenes/tangsuo-afternoon-tea.jpg" alt="达人探店时品牌合作的瑭所下午茶" label="放大相片"/><figcaption><span>02 / BRAND COLLABORATION</span><h5>瑭所下午茶</h5><p>达人探店时的品牌合作</p></figcaption></figure>
      </div>
    </div>
  </section>
  <section className="monti-page monti-matrix" id="montirivers-matrix">
    <div className="case-meta"><span>ONE BRAND / SIX VOICES</span><span>店员账号展示样本</span></div>
    <header className="monti-heading"><div><p className="case-script">Closer to people.</p><h4>让品牌，有人回应。</h4></div><p>官方号建立审美，顾问号补充实戴与选购。<br/>把内容与深圳门店连接起来。</p></header>
    <div className="monti-matrix-layout"><div className="monti-store"><DocumentMedia src="/montirivers/brand-2.jpg" alt="山河集深圳平安金融中心门店与黄金陈列"/><div className="monti-matrix-totals"><span><b>6</b>个账号样本</span><span><b>1,165</b>粉丝加总</span><span><b>5,849</b>赞藏加总</span></div><div className="monti-route"><h5>我设计的内容承接路径</h5><p>内容种草 <i>→</i> 进入主页 <i>→</i> 私信 / 顾问<br/>到店看货 <i>→</i> 晒单回流</p><small>路径设计，非已验证的成交漏斗</small></div><div className="monti-signal"><span>可见的需求信号</span><p>“多少钱？” “足金还是 18K？” “怎么买？”</p><small>公开评论已经出现选购提问；下一步是把咨询承接做好。</small></div></div><div className="monti-staff-grid">{staff.map((s,i)=><a key={s.name} href={`https://www.xiaohongshu.com/user/profile/${s.id}`} {...external}><div className="monti-staff-top"><span>0{i+1}</span><b>{s.name}</b><i>↗</i></div><p>{s.label}</p><div className="monti-staff-bar" role="img" aria-label={`${s.name}：${s.fans}粉丝`}><i style={{width:`${s.fans/612*100}%`}}/></div><div className="monti-staff-values"><span><b>{s.fans}</b> 粉丝</span><span><b>{s.likes}</b> 赞藏</span></div></a>)}</div></div>
    <section className="monti-store-guidelines" id="montirivers-store-sop" aria-labelledby="monti-store-sop-title">
      <header><span>STORE GUIDELINES / 10 个店员账号</span><h5 id="monti-store-sop-title">把品牌要求，写成店员能照着拍的 SOP。</h5></header>
      <div className="monti-sop-layout">
        <div className="monti-sop-document">
          <a className="document-media monti-sop-preview" href={assetPath("/montirivers/store-sop/staff-sop.webp")} {...external} aria-label="打开完整小红书店员账号 SOP 长图">
            <img src={assetPath("/montirivers/store-sop/staff-sop-preview.webp")} alt="Montirivers山河集小红书店员账号SOP，包含主页设置、拍摄角度与门店示例" loading="lazy"/>
            <span className="media-enlarge" aria-hidden="true">↗</span>
          </a>
          <a className="monti-sop-full-link" href={assetPath("/montirivers/store-sop/staff-sop.webp")} {...external}>打开完整 SOP 长图 ↗</a>
        </div>
        <div className="monti-sop-notes">
          <article><span>01 / 拍摄标准</span><h5>一件首饰，三种视角。</h5><div className="monti-angle-tags"><span>全貌</span><span>工艺细节</span><span>上身效果</span></div><p>每件首饰拍全貌、工艺细节和上身效果，让顾客看清纹理和佩戴比例。</p></article>
          <article><span>02 / 根据反馈调整</span><h5>把顾客的问题，写进下一条。</h5><p>每天看笔记数据和评论，把顾客反复问到的成色、购买方式写进下一条视频。</p></article>
        </div>
      </div>
      <div className="monti-staff-examples">
        <a href="https://www.xiaohongshu.com/explore/6a87dbef0000000033026a70" {...external} className="monti-staff-example">
          <img src={assetPath("/montirivers/store-sop/jenny-cover.webp")} alt="Jenny店员成片，花形黄金项链的全貌展示" loading="lazy"/>
          <div><span>对应店员成片 / Jenny</span><h5>Endless Summer · 无尽夏<br/>颈间诗</h5><p>山河集深圳店 Jenny</p><small>199 赞 · 113 收藏</small><b>打开视频笔记 ↗</b></div>
        </a>
        <a href="https://www.xiaohongshu.com/explore/6ae9307e0000000007003b31" {...external} className="monti-staff-example">
          <img src={assetPath("/montirivers/store-sop/krystal-cover.webp")} alt="Krystal店员成片，在手上展示圆筒金饰的细节与比例" loading="lazy"/>
          <div><span>对应店员成片 / Krystal</span><h5>圆筒的寓意与佩戴</h5><p>在传统首饰里，圆筒寓意着流转与顺遂，是带着祈愿意味的随身物。</p><small>7 赞</small><b>打开视频笔记 ↗</b></div>
        </a>
      </div>
    </section>
  </section>
</article>;
}
