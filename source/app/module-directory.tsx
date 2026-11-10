import { assetPath } from './asset-path';

export const modules = [
  {slug:'about',number:'01',title:'个人介绍',en:'A little about me',description:'从艺术与设计出发，走进内容创作。',tags:'关于我 / 创作流程',className:'directory-about',group:'tea'},
  {slug:'liangliang',number:'02',title:'服务 IP · 是亮亮',en:'Create with her',description:'PR 商务对接、选品搭配与内容剪辑。',tags:'账号分析 / 代表内容 / 爆款拆解',className:'directory-ip',group:'tea'},
  {slug:'accounts',number:'03',title:'椰奶没喝饱',en:'My own little world',description:'我的个人穿搭账号。',tags:'穿搭分享 / 受众分析 / 从零起号',className:'directory-accounts',group:'tea'},
  {slug:'rock',number:'04',title:'摇滚椰奶冻',en:'My little business',description:'独立经营的甜酷饰品小店。',tags:'饰品经营 / 选品搭配 / 内容创作',className:'directory-accounts',group:'tea'},
  {slug:'montirivers',number:'05',title:'MontiRivers 山河集',en:'A poem in gold',description:'参与初创品牌从 0 到 1 的内容建设。',tags:'品牌策略 / 内容运营 / 店员矩阵',className:'directory-brand',group:'tea'},
  {slug:'tools',number:'01',title:'我的小工具',en:'Little helpers',description:'把生活里的小需求，做成好用的小东西。',tags:'穿搭手记 / 爪爪日记 / 选题雷达 / 素材小助手',className:'directory-tools',group:'cake'},
  {slug:'aigc',number:'02',title:'我的 AIGC',en:'An imagination in progress',description:'两个作品位，等待新的创作。',tags:'AIGC / 作品待补充',className:'directory-about',group:'cake'},
  {slug:'videos',number:'03',title:'我的剪辑作品',en:'Stories in motion',description:'普通人3步学穿搭。',tags:'视频剪辑 / 穿搭',className:'directory-about',group:'cake'},
];

const folderLabels = modules.map(m=>m.title);

function FolderImage({slug}:{slug:string}) {
  if(slug==='tools')return <div className="archive-tools"><img src={assetPath('/toolbox-visuals/outfit-cart.png')} alt="购物车与衣服，穿搭手记" loading="lazy"/><img src={assetPath('/toolbox-visuals/paw-puppy.png')} alt="拼布小狗，爪爪日记" loading="lazy"/></div>;
  if(slug==='accounts')return <div className="archive-account-pair"><img src={assetPath('/account-collage/black-top-pink-skirt.jpg')} alt="椰奶没喝饱的穿搭" loading="lazy"/><img src={assetPath('/rock-account/note-2.jpg')} alt="摇滚椰奶冻的饰品" loading="lazy"/></div>;
  const photos: Record<string,[string,string]> = {
    about: ['/new-document/about-portrait-dog.jpg','詹依娜与小狗'],
    rock: ['/rock-account/note-2.jpg','摇滚椰奶冻的饰品'],
    aigc: ['/new-document/portrait-cover-clean.png','创作档案'],
    videos: ['/video-works/learn-styling-cover.png','普通人3步学穿搭'],
    liangliang: ['/new-document/ip-cover.png','是亮亮的户外人像'],
    montirivers: ['/montirivers/brand-1.jpg','山河集品牌形象'],
  };
  return <img src={assetPath(photos[slug][0])} alt={photos[slug][1]} loading="lazy"/>;
}

export function ModuleDirectory(){return (
  <section className="module-directory archive-directory" id="modules" aria-labelledby="directory-title">
    <div className="directory-heading"><div><p>THE INDEX / 我的创作档案</p><h2 id="directory-title">从这里，认识我的创作。</h2></div><span>Five chapters.<small>点击档案夹，打开完整内容 ↗</small></span></div>
    <div className="archive-deck">{modules.map((m,index)=>(
      <a href={assetPath(`/${m.slug}/`)} className={`directory-card archive-folder archive-${m.slug}`} key={m.slug} aria-label={`${m.title}：${m.description}`}>
        <div className="archive-number">FILE / {m.number}<span aria-hidden="true">↗</span></div>
        <div className="archive-photo"><FolderImage slug={m.slug}/></div>
        <span className="archive-spine" aria-hidden="true">{m.en}</span>
        <div className="archive-tab"><h3>{folderLabels[index]}</h3><span aria-hidden="true">{m.number}</span></div>
        <div className="archive-caption"><span>{m.title}</span><small>{m.tags}</small></div>
      </a>
    ))}</div>
    <div className="archive-footer"><span>YINA’S SELECTED WORK / 2026</span><span>每一份档案，都是创作的一部分。</span></div>
  </section>
);}
