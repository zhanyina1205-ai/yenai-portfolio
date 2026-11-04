import { DocumentMedia } from "./document-media";

function Flourish({className=""}:{className?:string}) {
 return <svg className={`notebook-flourish ${className}`} viewBox="0 0 200 340" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.3">
  <path d="M12 330C85 292 22 236 65 206S149 155 89 123S65 39 142 8M19 330C96 290 32 236 73 210S161 152 98 122S73 36 145 13"/>
  <path d="M59 205C12 201 18 151 40 157S68 192 59 205M65 207C40 184 21 191 27 173M71 206C112 246 147 192 123 188S90 190 71 206M77 205C106 226 129 203 119 198M91 123C132 139 174 99 142 84S115 110 91 123M97 123C126 123 149 103 140 94M78 104C36 111 38 69 55 72S75 89 78 104M83 100C54 88 47 84 55 77"/>
  <path d="M72 262C38 246 10 277 27 294S57 285 72 262M75 263C45 266 24 278 32 288M95 159C139 179 153 147 144 137S111 139 95 159M96 161C126 164 145 151 138 143M101 43C81 12 49 27 59 44S89 55 101 43M102 42C86 25 64 30 66 39"/>
  <g transform="translate(54 235)"><path d="M0-15C12-30 31-8 15 0C33 12 13 31 0 15C-13 30-33 12-15 0C-31-8-12-30 0-15Z"/><circle r="5"/><circle r="2"/></g>
  <path d="M149 19C177 6 185 36 167 43C153 48 153 31 161 30M148 21C163 13 177 24 166 33M29 314C1 306 6 282 19 286S29 302 18 299"/>
 </g></svg>;
}

export function IpNotebook() {
 return <div className="ip-notebook-case" id="liangliang">
  <article className="ip-notebook" aria-labelledby="ip-notebook-title">
   <div className="notebook-cover">
    <DocumentMedia src="/new-document/ip-cover.png" alt="是亮亮的户外人像照片" className="notebook-cover-photo"/>
    <div className="notebook-cover-label"><span>LIANGLIANG / IP PROJECT 01</span><span>BEAUTY · STYLE · LIFE</span></div>
    <p className="notebook-cover-word" aria-hidden="true">Liangliang</p>
    <div className="notebook-inset"><DocumentMedia src="/new-document/ip-portrait.png" alt="是亮亮手持落叶的户外人物照片"/><span>another side of her.</span></div>
   </div>
   <div className="notebook-binding" aria-hidden="true">{Array.from({length:24},(_,i)=><i key={i}/>)}</div>
   <div className="notebook-page">
    <div className="notebook-title-block"><span className="notebook-project-index">01 / 曾服务的 IP</span><div className="notebook-star" aria-hidden="true"/><span className="notebook-tiny-star star-one" aria-hidden="true">✦</span><span className="notebook-tiny-star star-two" aria-hidden="true">✦</span><p className="notebook-script" aria-hidden="true">About<br/>she</p><h3 id="ip-notebook-title">是亮亮<span>穿搭账号 @涂芷靓</span></h3><div className="notebook-contact-sheet"><DocumentMedia src="/new-document/ip-series.png" alt="是亮亮手持番石榴的户外三联照片"/><span>moments in the sunlight.</span></div></div>
    <div className="notebook-role"><p className="notebook-role-label">MY ROLE / 我的工作</p><p>我主要负责她的穿搭账号「涂芷靓」，参与 PR 商务对接、选品搭配和内容剪辑。</p><ul><li><span>01</span><div><b>PR 商务对接</b><small>对接品牌 PR，跟进穿搭内容合作。</small></div></li><li><span>02</span><div><b>选品与搭配</b><small>围绕穿搭内容完成选品与造型搭配。</small></div></li><li><span>03</span><div><b>内容剪辑</b><small>完成穿搭内容的剪辑制作。</small></div></li></ul><a className="notebook-work-link" href="#ip-selected-work">查看代表作品 <span>↗</span></a></div>
    <Flourish className="page-flourish"/>
   </div>
  </article>
 </div>;
}
