"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { assetPath } from "./asset-path";

const pages = [
  { front: "01-collage-door-right.jpg", back: "02-cake-notebook-left.jpg" },
  { front: "02-cake-notebook-right.jpg", back: "03-shop-coupe-left.jpg" },
  { front: "03-shop-coupe-right.jpg", back: "04-ribbon-fabric-left.jpg" },
  { front: "04-ribbon-fabric-right.jpg", back: "05-menu-tart-left.jpg" },
  { front: "05-menu-tart-right.jpg", back: "01-collage-door-left.jpg" },
];

// Full-page stills cropped from the user's supplied Cake Social reference video.
function ReferencePage({ file }: { file: string }) {
  return <img className="intro-full-photo" src={assetPath(`/intro-reference/${file}`)} alt="" width={304} height={412} loading="eager"/>;
}

export function BookIntro() {
  const [phase, setPhase] = useState<"loading" | "playing" | "ready" | "leaving">("loading");
  const [dismissed, setDismissed] = useState(false);
  const intro = useRef<HTMLElement>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaving = useRef(false);

  useEffect(() => {
    if (dismissed) {
      const focusFrame = requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>(".site-header .wordmark")?.focus({ preventScroll: true }));
      return () => cancelAnimationFrame(focusFrame);
    }
    // Links to a specific chapter should continue to open that chapter directly.
    if (window.location.hash && window.location.hash !== "#top") {
      setDismissed(true);
      return;
    }
    const canvas = document.querySelector<HTMLElement>(".site-canvas");
    const oldInert = canvas?.inert ?? false;
    const oldOverflow = document.documentElement.style.overflow;
    if (canvas) canvas.inert = true;
    document.documentElement.style.overflow = "hidden";
    intro.current?.focus({ preventScroll: true });

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let started = false;
    function start() {
      if (disposed || started || leaving.current) return;
      started = true;
      setPhase(preference.matches ? "ready" : "playing");
    }
    const images = Array.from(intro.current?.querySelectorAll("img") ?? []);
    // Wait briefly for local photographs, but never trap a visitor on a failed image.
    const loadingTimeout = window.setTimeout(start, 1600);
    const settled = images.map(img => img.complete ? Promise.resolve() : new Promise<void>(resolve => {
      img.addEventListener("load", () => resolve(), { once: true });
      img.addEventListener("error", () => resolve(), { once: true });
    }));
    Promise.all(settled).then(start);
    function reduceMotion() { if (preference.matches && !leaving.current) setPhase("ready"); }
    preference.addEventListener("change", reduceMotion);
    return () => {
      disposed = true;
      clearTimeout(loadingTimeout);
      preference.removeEventListener("change", reduceMotion);
      if (canvas) canvas.inert = oldInert;
      document.documentElement.style.overflow = oldOverflow;
    };
  }, [dismissed]);

  useEffect(() => () => { if (exitTimer.current) clearTimeout(exitTimer.current); }, []);

  function enter() {
    if (leaving.current) return;
    leaving.current = true;
    setPhase("leaving");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    exitTimer.current = setTimeout(() => {
      setDismissed(true);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.querySelector<HTMLAnchorElement>(".site-header .wordmark")?.focus({ preventScroll: true });
      });
    }, reduced ? 0 : 650);
  }

  if (dismissed) return null;
  return <section ref={intro} tabIndex={-1} className="book-intro" data-phase={phase} role="dialog" aria-modal="true" aria-label="翻开詹依娜的个人作品集" onKeyDown={event => {
    if (event.key === "Escape") { event.preventDefault(); enter(); }
    if (event.key === "Tab") {
      const buttons = Array.from(intro.current?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)") ?? []);
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === intro.current)) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  }}>
    <div className="intro-topline"><span>YINA ZHAN / PERSONAL ARCHIVE</span><button type="button" onClick={enter}>跳过开屏 <span aria-hidden="true">↗</span></button></div>
    <div className="intro-composition">
      <p className="intro-script intro-script-top" aria-hidden="true">Yina&apos;s</p>
      <div className="intro-book-stage">
        <div className="intro-book">
          <div className="intro-book-cover" aria-hidden="true"/>
          <div className="intro-fixed-left intro-paper intro-reference-page" aria-hidden="true"><ReferencePage file="01-collage-door-left.jpg"/></div>
          <button className="intro-final-page intro-paper" type="button" disabled={phase !== "ready"} onClick={enter} aria-label="点击首页照片，进入詹依娜的个人网站">
            <span className="intro-page-index">YINA / PERSONAL FILE 001</span>
            <figure className="intro-portrait"><img src={assetPath("/new-document/portrait-cover-clean.png")} alt="詹依娜的首页人像照片" width={1254} height={1254} fetchPriority="high"/><figcaption>詹依娜 <span>也可以叫我椰奶</span></figcaption></figure>
            <span className="intro-portrait-label">HI, I&apos;M YINA.</span><span className="intro-photo-link">点击照片，认识我 <span aria-hidden="true">↗</span></span>
          </button>
          {pages.map((page, index) => <div className="intro-leaf" key={page.front} style={{ "--page": index, "--turn-delay": `${0.3 + index * 0.78}s` } as CSSProperties} aria-hidden="true" onAnimationEnd={event => {
            if (event.animationName === "intro-page-turn" && index === pages.length - 1 && !leaving.current) setPhase("ready");
          }}>
            <div className="intro-leaf-front intro-paper"><ReferencePage file={page.front}/></div>
            <div className="intro-leaf-back intro-paper intro-reference-page"><ReferencePage file={page.back}/></div>
          </div>)}
          <div className="intro-binding" aria-hidden="true">{Array.from({length:14},(_,index)=><i key={index}/>)}</div>
        </div>
      </div>
      <p className="intro-script intro-script-bottom" aria-hidden="true">Portfolio</p>
    </div>
    <div className="intro-bottomline"><span className="intro-state" role="status" aria-live="polite">{phase === "ready" ? "书已翻到这一页，等你走进来。" : "正在翻开我的故事…"}</span><button className="intro-enter" type="button" onClick={enter} disabled={phase !== "ready"}>进入我的网站 <span aria-hidden="true">↗</span></button><span className="intro-edition">VOL. 01 / 2026</span></div>
  </section>;
}
