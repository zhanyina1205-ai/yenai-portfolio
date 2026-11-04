const regions = [
  { name: "广东", main: 13.3, fashion: 17.0 },
  { name: "浙江", main: 8.7, fashion: 9.6 },
  { name: "河南", main: 7.0, fashion: 5.7 },
  { name: "四川", main: 6.1, fashion: 5.3 },
  { name: "江苏", main: 6.0, fashion: 5.4 },
];

export function IpAudience() {
  return <section className="ip-audience" aria-labelledby="audience-title">
    <header className="ip-editorial-heading"><div><span>01 / KNOW THE AUDIENCE</span><h4 id="audience-title">看见账号背后的人</h4></div><p>美妆主号建立方法与信任，<br/>穿搭号延伸造型与同款需求。</p></header>
    <div className="ip-audience-grid">
      <article className="ip-gender-panel"><span className="ip-panel-label">是亮亮 · 抖音主号粉丝画像</span><div className="ip-gender-chart" role="img" aria-label="女性粉丝占比83.18%"><div><strong>83.18<small>%</small></strong><span>女性粉丝</span></div></div><h5>年轻女性，是内容的核心受众</h5><p>年龄以 <b>18—30 岁</b>为主</p><span className="ip-age-tag">美妆方法</span><span className="ip-age-tag">造型灵感</span><small className="ip-chart-source">2026.10.12 报告截图 · 仅主号口径</small></article>
      <article className="ip-region-panel"><div className="ip-region-heading"><div><span className="ip-panel-label">评论用户地域 · 抽样</span><h5>两类内容，都与南方用户更常相遇</h5></div><span>占各账号去重样本</span></div><div className="ip-chart-legend"><span>是亮亮 · 美妆</span><span>涂芷靓 · 穿搭</span></div>
        <div className="ip-region-bars">{regions.map(region => <div className="ip-region-row" key={region.name}><span>{region.name}</span><div>{(["main", "fashion"] as const).map(key => <div className={`ip-region-track ${key}`} key={key}><i style={{width: `${region[key] / 20 * 100}%`}}/><b>{region[key].toFixed(1)}%</b></div>)}</div></div>)}</div>
        <p className="ip-region-summary">南方评论用户占比 <strong>67.7% <small>/ 主号</small></strong><strong>71.8% <small>/ 穿搭号</small></strong></p>
      </article>
    </div>
    <details className="ip-data-method"><summary>查看数据口径与来源 ↗</summary><p>地域来自 2025 年 6—8 月发布内容的一级评论抽样，采集于 2026.11.01；主号 29 篇、2,240 名去重用户，穿搭号 52 篇、1,261 名去重用户。按账号分别去重，排除作者与助理。图中选择主号样本占比最高的五个省份进行对照。这是评论样本分布，不代表完整粉丝地域，也不能直接推断购买力。</p><a href="https://mcn7qru2e05g.feishu.cn/docx/Z8DidiS3QohIxlxEKv2c7NJMnde" target="_blank" rel="noopener noreferrer">资料来源：账号定位与受众分析 ↗</a></details>
    <div className="ip-business"><div className="ip-business-intro"><span>CONTENT → COMMERCE</span><h4>从内容兴趣，<br/>走向商品选择。</h4><p>账号可见的变现路径</p></div><ol><li><span>01 / 主号</span><h5>讲解与预热</h5><p>合集讲清单品价值，<br/>口播提示直播预约。</p></li><li><span>02 / 穿搭号</span><h5>造型种草</h5><p>短视频展示整体风格，<br/>评论引导至主号。</p></li><li><span>03 / 直播</span><h5>同款承接</h5><p>把选款、问链接的兴趣，<br/>承接到直播场景。</p></li></ol></div>
    <div className="ip-business-foot"><span>品牌合作渠道：星图 / 蒲公英</span><p>依据报告与笔记中的公开引导整理；未获得订单、转化率或成交额数据。</p></div>
  </section>;
}
