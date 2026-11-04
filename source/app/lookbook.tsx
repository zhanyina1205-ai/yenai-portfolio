"use client";

import { useRef, useState } from "react";
import { DocumentMedia } from "./document-media";

const looks = [
  { title: "冬日叠搭", season: "WINTER", details: "驼色大衣 · 豹纹围巾" },
  { title: "灰调秋日", season: "AUTUMN", details: "露肩上衣 · 长靴" },
  { title: "温柔春日", season: "SPRING", details: "蕾丝吊带 · 飘逸长裙" },
  { title: "夏日漫步", season: "SUMMER", details: "草帽 · 黑白长裙" },
  { title: "暖棕冬日", season: "WINTER", details: "毛绒外套 · 棕色半裙" },
  { title: "秋日通勤", season: "AUTUMN", details: "橄榄绿衬衫 · 铅笔裙" },
];

export function Lookbook() {
  const rail = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  function scroll(direction: number) {
    const element = rail.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * element.clientWidth * 0.8, behavior: reduced ? "instant" : "smooth" });
  }
  function updatePosition() {
    const element = rail.current;
    if (!element) return;
    setAtStart(element.scrollLeft <= 2);
    setAtEnd(element.scrollLeft + element.clientWidth >= element.scrollWidth - 2);
  }
  return <section className="lookbook" id="lookbook" aria-labelledby="lookbook-title">
    <svg className="lookbook-filter-defs" aria-hidden="true" width="0" height="0" focusable="false">
      <defs>
        <filter id="lookbook-outline" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="expanded"/>
          <feFlood floodColor="#fff8ef"/>
          <feComposite in2="expanded" operator="in" result="outline"/>
          <feMerge><feMergeNode in="outline"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
    </svg>
    <div className="lookbook-meta"><span>YINA / THE STYLE EDIT</span><span>06 LOOKS · FOUR SEASONS</span></div>
    <header className="lookbook-heading"><div><p>我的穿搭选集</p><h4 id="lookbook-title">My Looks</h4></div><p className="lookbook-intro">把喜欢的风格，穿进日常。<span>点击人物，查看完整造型 ↗</span></p></header>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- This horizontal scroll region is focusable so native arrow keys can scroll its contents. */}
    <div className="lookbook-rail" ref={rail} onScroll={updatePosition} tabIndex={0} aria-label="六套个人穿搭，左右滑动查看">
      {looks.map((look, index) => <figure className="lookbook-look" key={look.title}>
        <DocumentMedia src={`/lookbook/look-${index + 1}.png`} alt={`椰奶的${look.title}：${look.details}`} label="查看完整造型" className="lookbook-cutout"/>
        <figcaption><span className="lookbook-number">0{index + 1} / {look.season}</span><h5>{look.title}</h5><p>{look.details}</p></figcaption>
      </figure>)}
    </div>
    <div className="lookbook-bottom"><span>椰奶没喝饱_ / PERSONAL LOOKBOOK</span><span className="lookbook-signature" aria-hidden="true">Wear it your way.</span><div className="lookbook-controls"><span>左右滑动</span><button type="button" aria-label="查看前面的穿搭" disabled={atStart} onClick={() => scroll(-1)}>←</button><button type="button" aria-label="查看后面的穿搭" disabled={atEnd} onClick={() => scroll(1)}>→</button></div></div>
  </section>;
}
