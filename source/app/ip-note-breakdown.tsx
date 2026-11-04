import { ipNotes } from "./ip-case-data";
import { assetPath } from "./asset-path";

export function IpNoteBreakdown() {
  return <section className="ip-note-breakdown" id="ip-breakdown" aria-labelledby="ip-breakdown-title">
    <header className="ip-editorial-heading"><div><span>03 NOTES / A CLOSER LOOK</span><h4 id="ip-breakdown-title">爆款背后的三个内容选择</h4></div><p>从第一眼，到看完以后。<br/>用关键画面，讲清可复用的做法。</p></header>
    <div className="ip-breakdown-grid">{ipNotes.map(note => <article className="ip-breakdown-card" key={note.id}>
      <div className="ip-breakdown-kicker"><span>{note.number} / {note.category}</span><a href={note.href} target="_blank" rel="noopener noreferrer" aria-label={`查看原笔记：${note.title}`}>原笔记 ↗</a></div>
      <h5>{note.headline}</h5><div className="ip-frame-strip">{note.frames.map(frame => <figure key={frame.image}><div><img src={assetPath(`/ip-case-study/frame-${String(frame.image).padStart(2,"0")}.jpg`)} alt={frame.caption} loading="lazy" width={400} height={711}/><span>{frame.time}</span></div><figcaption>{frame.caption}</figcaption></figure>)}</div>
      <p className="ip-breakdown-takeaway">{note.takeaway}</p><p className="ip-breakdown-action"><span>看完之后</span>{note.action}</p>
    </article>)}</div>
    <p className="ip-breakdown-footnote">画面来自对应笔记，时间点为约数。拆解是基于内容与评论的观察，不将单一设计直接归因为爆款原因。</p>
  </section>;
}
