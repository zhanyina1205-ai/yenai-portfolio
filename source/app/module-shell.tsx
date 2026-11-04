import type {ReactNode} from 'react';
import {assetPath} from './asset-path';
import {modules} from './module-directory';
import {PortfolioInteractions} from './portfolio-interactions';
const shortLabels:Record<string,string>={about:'个人介绍',liangliang:'是亮亮',accounts:'椰奶没喝饱',rock:'摇滚椰奶冻',montirivers:'山河集',tools:'我的小工具',aigc:'AIGC',videos:'剪辑作品'};
export function PortfolioHeader({current}:{current?:string}){
 const active=modules.find(m=>m.slug===current),group=active?.group||'tea',back=group==='tea'?'下午茶':'蛋糕作品';
 return <header className="portfolio-header"><a className="wordmark" href={assetPath('/#home')}>椰奶<span>YENAI PORTFOLIO</span></a><nav aria-label="作品集模块" className="portfolio-nav">{modules.filter(m=>m.group===group).map(m=><a key={m.slug} href={assetPath(`/${m.slug}/`)} aria-current={current===m.slug?'page':undefined}>{shortLabels[m.slug]}</a>)}</nav><a className="header-index-link" href={assetPath(`/#${group}`)}>← 返回{back}</a></header>;
}
export function ModuleShell({slug,children,chapters}:{slug:string,children:ReactNode,chapters:{id:string,label:string}[]}){
 const m=modules.find(m=>m.slug===slug)!;const siblings=modules.filter(item=>item.group===m.group),next=siblings[(siblings.indexOf(m)+1)%siblings.length],back=m.group==='tea'?'下午茶':'蛋糕作品';
 return <><PortfolioInteractions chapters={chapters}/><a className="skip-link" href="#main">跳到主要内容</a><div className={`site-canvas module-page module-${slug==='rock'?'accounts':slug}`} id="top"><PortfolioHeader current={slug}/><main id="main"><header className="module-page-heading"><div><a href={assetPath(`/#${m.group}`)}>{back}</a><span>/ CHAPTER {m.number}</span></div><h1>{m.title}<span>{m.en}.</span></h1><nav aria-label="本页目录">{chapters.map(c=><a href={`#${c.id}`} key={c.id}>{c.label}<span>↓</span></a>)}</nav></header><div className="module-page-content">{children}</div><footer className="module-pagination"><a href={assetPath(`/#${m.group}`)}><span>BACK TO {m.group==='tea'?'TEA TIME':'MY CREATIONS'}</span><b>返回{back} <i>↖</i></b></a><a href={assetPath(`/${next.slug}/`)}><span>NEXT CHAPTER / {next.number}</span><b>{next.title} <i>↗</i></b></a></footer></main><div className="module-footer"><span>© 2026 · 椰奶作品集 / YINA ZHAN</span><a href="mailto:1106731983@qq.com">聊聊新的可能 ↗</a></div></div></>;
}
