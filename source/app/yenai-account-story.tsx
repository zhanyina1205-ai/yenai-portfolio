import { assetPath } from "./asset-path";

const source = "https://mcn7qru2e05g.feishu.cn/docx/YL4fdfN1oo4EowxKLo1cYe0Gnod";
type Distribution = ReadonlyArray<readonly [string, number]>;

const ages: Distribution = [
  ["18 岁以下", 2.5], ["18–24 岁", 71.6], ["25–34 岁", 23.4], ["35–44 岁", 0.9], ["45 岁以上", 1.6],
];
const regions: Distribution = [
  ["广东", 17.9], ["浙江", 7.8], ["江苏", 6.2], ["山东", 5.6], ["福建", 5.3], ["河南", 4.8], ["湖北", 4.4],
];
const interests: Distribution = [
  ["时尚", 12.7], ["美食", 10.1], ["娱乐", 9.9], ["生活记录", 9.7], ["美妆", 9.4],
];
const devices: Distribution = [
  ["苹果", 77.55], ["小米", 5.02], ["vivo", 4.84], ["OPPO", 4.50], ["华为", 4.38],
  ["荣耀", 2.24], ["一加", 0.53], ["三星", 0.29], ["realme", 0.27], ["联想", 0.08],
];

function AudienceBars({ rows, max }: { rows: Distribution; max: number }) {
  return <ul className="yenai-distribution">{rows.map(([label, value]) =>
    <li key={label}><span>{label}</span><span className="yenai-bar" aria-hidden="true"><i style={{ width: `${value / max * 100}%` }} /></span><b>{value.toFixed(1)}%</b></li>
  )}</ul>;
}

const milestones = [
  { date: "2023.02—05", title: "先开始，再找到自己", text: "从宿舍穿衣镜前试水，把艺术生身份、平价单品和个人风格放进内容。", label: "4 篇试水笔记" },
  { date: "2023.06—09", title: "让单套长成合集", text: "固定更新；把被问得多的单品，按品类、季节整理成可照着买的合集。", label: "首篇万赞 · 吊带合集" },
  { date: "2023.10—2024.08", title: "把有效的方法持续做", text: "接近日更，跟着季节做系列。单套展示风格，合集提供完整搭配参考。", label: "305 篇内容 · 月均约 28 篇" },
  { date: "2024.10 →", title: "从个人创作，走向 IP", text: "带着四万粉账号的经验进入 MCN 实习，后来继续探索姐系通勤与视频内容。", label: "个人经验 → IP 内容实践" },
];

export function YenaiAudience() {
  return <section className="yenai-audience" id="yenai-audience" aria-labelledby="yenai-audience-title">
    <div className="yenai-section-meta"><span>YENAI / AUDIENCE NOTES</span><span>01 / 我的受众</span></div>
    <header className="yenai-audience-heading">
      <div><p className="yenai-script" aria-hidden="true">For her.</p><h4 id="yenai-audience-title">我的穿搭，分享给谁？</h4></div>
      <div className="yenai-position">
        <span>从评论里，认识屏幕另一端的她</span>
        <p>我主要写给女大学生，也写给那些想穿出自己的风格、买衣服时会考虑预算的年轻女生。</p>
        <div><span>平价好买</span><span>整套可参考</span><span>日常能穿</span></div>
      </div>
    </header>
    <div className="yenai-fan-grid">
      <div className="yenai-fan-panel">
        <h5>性别与设备</h5>
        <div className="yenai-gender"><div className="yenai-gender-ring" role="img" aria-label="女性粉丝占 97.43%">
          <div><b>97.43<small>%</small></b><span>女性粉丝</span></div>
        </div><p>男性粉丝 2.56%</p></div>
        <p className="yenai-device-stat">苹果设备 <b>77.55%</b></p>
      </div>
      <div className="yenai-fan-panel"><h5>粉丝年龄</h5><AudienceBars rows={ages} max={100} /></div>
      <div className="yenai-fan-panel"><h5>粉丝地域 <small>前 7 个省份</small></h5><AudienceBars rows={regions} max={20} /></div>
      <div className="yenai-fan-panel"><h5>内容兴趣 <small>前 5 类</small></h5><AudienceBars rows={interests} max={15} /></div>
    </div>
    <p className="yenai-data-caption">约七成粉丝在 18–24 岁之间，广东粉丝最多，其次是浙江和江苏。来源：小红书粉丝分析 · 2026.10.29</p>
    <div className="yenai-needs">
      <div><span>评论里最常问</span><h5>“在哪里买？”<small>347 条</small></h5><p>我把店名和价格写在封面上，方便大家找同款。</p></div>
      <div><span>她们还想知道</span><h5>“怎么搭？”<small>246 条</small></h5><p>我把鞋、包和配饰一起拍进画面，给她们一整套搭配参考。</p></div>
      <blockquote>“关注她了<br/>以后这就是我的大学衣服”<cite>— 一位读者的留言</cite></blockquote>
    </div>
    <details className="yenai-source"><summary>查看设备明细与评论来源</summary>
      <p>设备品牌占比：{devices.map(([name, value]) => `${name} ${value.toFixed(2)}%`).join("、")}。</p>
      <p>问题条数来自起号与爆发期的 2,299 条评论，按关键词归类；同一条评论可以涉及两类问题。</p>
      <a href={source} target="_blank" rel="noopener noreferrer">阅读评论复盘 ↗</a>
    </details>
  </section>;
}

export function YenaiOriginStory() {
  return <section className="yenai-origin" id="yenai-origin" aria-labelledby="yenai-origin-title">
    <div className="yenai-section-meta"><span>YENAI / STARTED FROM MY ROOM</span><span>02 / 从零起号</span></div>
    <div className="yenai-origin-top"><div className="yenai-origin-copy"><p className="yenai-script" aria-hidden="true">My first account.</p><h4 id="yenai-origin-title">从一面宿舍穿衣镜，<br/>到被更多人看见。</h4><div className="yenai-growth"><span>0</span><i aria-hidden="true">↗</i><span>4<small>万粉</small></span></div><p>2023 年大三开始做穿搭号。<br/>从选题、出镜到拍摄剪辑、商务对接，独立完成。</p><span className="yenai-growth-date">截至 2024.10 进入 MCN 实习时</span></div>
      <div className="yenai-story-photos"><figure><a className="document-media" href="https://xhslink.cn/o/6ug4j6sqq71" target="_blank" rel="noopener noreferrer" aria-label="在小红书打开：艺术生夏日9套辣妹穿搭合集第一弹（附链接）"><img src={assetPath("/yenai-story/summer-dorm-collection.webp")} alt="艺术生夏日9套辣妹穿搭合集第一弹，宿舍对镜拍九宫格封面" loading="lazy"/><span className="media-enlarge" aria-hidden="true">↗</span></a><figcaption><span>01 / 宿舍镜拍 · 2024.05</span>夏日 9 套辣妹穿搭合集 · 第一弹</figcaption></figure><figure><a className="document-media" href="https://xhslink.cn/o/1qqhhxRnZaW" target="_blank" rel="noopener noreferrer" aria-label="在小红书打开：欧米加网纱一字肩➕低腰工装裤真的好辣🥵"><img src={assetPath("/yenai-story/mesh-cargo-look.webp")} alt="欧米加网纱一字肩搭配低腰工装裤，黑色系宿舍对镜拍笔记封面" loading="lazy"/><span className="media-enlarge" aria-hidden="true">↗</span></a><figcaption><span>02 / 单套穿搭 · 2024.04</span>网纱一字肩＋低腰工装裤</figcaption></figure><span className="yenai-photo-note" aria-hidden="true">My mirror, my style.</span></div>
    </div>
    <ol className="yenai-timeline">{milestones.map((item, i) => <li key={item.date}><div className="yenai-time-number"><span>0{i + 1}</span><time>{item.date}</time></div><h5>{item.title}</h5><p>{item.text}</p><span className="yenai-time-label">{item.label}</span></li>)}</ol>
    <div className="yenai-origin-bottom"><p>我留下的方法：<b>先让人记住我，再让穿搭对她有用。</b></p><a href="#selected-notes">看我的代表内容 ↗</a></div>
    <p className="yenai-origin-source">时间线依据账号复盘资料；“万赞”指该笔记在 2026.11.01 采集时的累计点赞，非发布当日数据。<a href={source} target="_blank" rel="noopener noreferrer">资料来源 ↗</a></p>
  </section>;
}
