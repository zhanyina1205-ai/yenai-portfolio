import { assetPath } from "./asset-path";

const notes = [
  {
    "href": "https://xhslink.cn/o/5K2l3IjfczA",
    "likes": "1.97万",
    "saves": "1.14万",
    "title": "艺术生云南8⃣️天旅游穿搭合集（附🔗",
    "cover": "/note-covers/note-1.jpg",
    "author": "椰奶没喝饱_",
    "type": "normal",
    "width": 1920,
    "height": 2560
  },
  {
    "href": "https://xhslink.cn/o/304rUVT5FUg",
    "likes": "3.38万",
    "saves": "1.11万",
    "title": "黑色夹克➕透视内搭➕低腰工装裤真的好辣🥵",
    "cover": "/note-covers/note-2.jpg",
    "author": "椰奶没喝饱_",
    "type": "normal",
    "width": 1440,
    "height": 1920
  },
  {
    "href": "https://xhslink.cn/o/AMX4gDLpkzf",
    "likes": "3,946",
    "saves": "1,236",
    "title": "9⃣️套look春日早八韩系学院风套装合集（附🔗",
    "cover": "/note-covers/note-3.jpg",
    "author": "椰奶没喝饱_",
    "type": "normal",
    "width": 1920,
    "height": 2560
  },
  {
    "href": "https://xhslink.cn/o/2rejZlqDkbz",
    "likes": "1,150",
    "saves": "424",
    "title": "早秋姐系风衣穿搭🍂温柔慵懒气质大姐姐～🤎",
    "cover": "/note-covers/note-4.jpg",
    "author": "椰奶没喝饱_",
    "type": "video",
    "width": 1290,
    "height": 1720
  },
  {
    "href": "https://xhslink.cn/o/6ozW7w8dYis",
    "likes": "4,717",
    "saves": "1,422",
    "title": "高智感姐系大衣穿搭‼️气质清冷韩剧大女主🖤",
    "cover": "/note-covers/note-5.jpg",
    "author": "椰奶没喝饱_",
    "type": "normal",
    "width": 3668,
    "height": 4890
  }
];

export function NoteCards() {
 return <section className="selected-notes" id="selected-notes" aria-labelledby="notes-title">
  <div className="notes-heading"><h4 id="notes-title">五条代表内容</h4><span>点击封面，打开小红书笔记 ↗</span></div>
  <div className="note-card-grid">{notes.map(note => <a className="note-card" href={note.href} target="_blank" rel="noopener noreferrer" key={note.href} aria-label={`在小红书打开：${note.title}`}>
   <div className="note-cover"><img src={assetPath(note.cover)} alt={note.title} width={note.width} height={note.height} loading="lazy"/>{note.type === "video" && <span className="note-video" aria-label="视频笔记">▶</span>}</div>
   <div className="note-card-copy"><h5 title={note.title}>{note.title}</h5><div className="note-card-stats"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg><span>点赞 <b>{note.likes}</b></span></span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.6l6.2-.9Z"/></svg><span>收藏 <b>{note.saves}</b></span></span></div><div className="note-card-footer"><span className="note-author"><img src={assetPath("/note-covers/avatar.jpg")} alt="" width={22} height={22}/><span>{note.author}</span></span><span className="note-open" aria-hidden="true">↗</span></div></div>
  </a>)}</div>
  <p className="notes-data-date">互动数据采集于 2026.10.22，非实时。</p>
 </section>;
}
