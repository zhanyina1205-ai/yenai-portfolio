"use client";

import { useEffect, useRef, useState } from "react";

type Chapter = { id: string; label: string };
export function PortfolioInteractions({ chapters, dock = true }: { chapters: Chapter[]; dock?: boolean }) {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listeners = new AbortController();
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sections = chapters.map(chapter => document.getElementById(chapter.id));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".site-header nav a,.folder-tabs a"));
    const originalCurrent = navLinks.map(link => link.getAttribute("aria-current"));
    const animations = new Set<Animation>();
    let scrollFrame = 0;
    let lastChapter: string | undefined;

    function updateReading() {
      scrollFrame = 0;
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maximum > 0 ? Math.round(Math.min(1, Math.max(0, window.scrollY / maximum)) * 100) : 0);
      setVisible(window.scrollY > window.innerHeight * 0.45);
      let current = "";
      const readingLine = Math.min(180, window.innerHeight * 0.25);
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= readingLine) current = chapters[index].id;
      });
      // The last section can be shorter than a viewport, so its anchor stops at the page end.
      if (maximum > 0 && maximum - window.scrollY <= 4) current = chapters[chapters.length - 1].id;
      if (current !== lastChapter) {
        lastChapter = current;
        setActive(current);
        navLinks.forEach(link => {
          const selected = link.hash === `#${current || (link.closest(".folder-tabs") ? "about" : "")}`;
          if (selected) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    }
    function queueReadingUpdate() {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateReading);
    }
    window.addEventListener("scroll", queueReadingUpdate, { passive: true, signal: listeners.signal });
    window.addEventListener("resize", queueReadingUpdate, { passive: true, signal: listeners.signal });
    updateReading();

    const revealSelector = ".directory-card,.section-kicker,.display-title,.about-grid,.ip-notebook-case,.ip-positioning,.ip-account-matrix article,.ip-work-heading,.ip-fashion-collage,.ip-work-note-wrap,.ip-review-grid article,.own-project-copy,.account-collage-wrap,.yenai-audience,.yenai-origin,.lookbook,.notes-heading,.note-card-grid>a,.rock-case,.monti-page,.workflow-list article,.support-intro,.support-cards article,.toolbox-heading,.toolbox-shelf-label,.tool-card,.toolbox-footnote,.contact-layout,.footer-line";
    // Reveal independent blocks, never both a block and its descendants.
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
      .filter(element => !element.parentElement?.closest(revealSelector));
    const pending = new Map<HTMLElement, Animation>();
    const running = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(entries => {
      const entering = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
      entering.forEach((entry, index) => {
        const element = entry.target as HTMLElement;
        const animation = pending.get(element);
        if (!animation) return;
        observer.unobserve(element);
        pending.delete(element);
        if (preference.matches) { animation.cancel(); animations.delete(animation); return; }
        // A small stagger within each newly visible group, not a long page-wide queue.
        animation.effect?.updateTiming({ delay: Math.min(index, 3) * 100 });
        running.set(element, animation);
        animation.play();
        animation.finished.then(() => {
          animation.cancel();
          animations.delete(animation);
          running.delete(element);
        }).catch(() => {});
      });
    }, { threshold: 0, rootMargin: "0px 0px -48px 0px" });

    revealElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      // Leave initial/deep-linked content readable; only prepare blocks below the fold.
      if (preference.matches || rect.top < window.innerHeight) return;
      const animation = element.animate([
        { opacity: 0, translate: "0 28px" },
        { opacity: 1, translate: "0 0" },
      ], { duration: 1000, easing: "cubic-bezier(.22,.68,.2,1)", fill: "both" });
      animation.pause();
      animation.currentTime = 0;
      animations.add(animation);
      pending.set(element, animation);
      observer.observe(element);
    });

    function showImmediately(element: HTMLElement) {
      const animation = pending.get(element) ?? running.get(element);
      animation?.cancel();
      if (animation) animations.delete(animation);
      pending.delete(element);
      running.delete(element);
      observer.unobserve(element);
    }
    // Keyboard and anchor navigation must never land on an invisible control.
    document.addEventListener("focusin", event => {
      if (!(event.target instanceof Element)) return;
      revealElements.forEach(element => {
        if (element.contains(event.target as Node)) showImmediately(element);
      });
    }, { signal: listeners.signal });
    window.addEventListener("hashchange", () => {
      revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) showImmediately(element);
      });
    }, { signal: listeners.signal });

    const tiltElements = Array.from(document.querySelectorAll<HTMLElement>(".about-portrait,.phone-frame,.notebook-inset"));
    tiltElements.forEach(element => {
      element.addEventListener("pointermove", event => {
        if (preference.matches || !finePointer.matches) return;
        const rect = element.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
        const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
        element.style.setProperty("--tilt-x", `${-y * 3}deg`);
        element.style.setProperty("--tilt-y", `${x * 3}deg`);
      }, { passive: true, signal: listeners.signal });
      element.addEventListener("pointerleave", () => {
        element.style.removeProperty("--tilt-x");
        element.style.removeProperty("--tilt-y");
      }, { signal: listeners.signal });
    });
    preference.addEventListener("change", () => {
      animations.forEach(animation => animation.cancel());
      animations.clear();
      pending.clear();
      running.clear();
      observer.disconnect();
      tiltElements.forEach(element => {
        element.style.removeProperty("--tilt-x");
        element.style.removeProperty("--tilt-y");
      });
    }, { signal: listeners.signal });

    return () => {
      listeners.abort();
      window.cancelAnimationFrame(scrollFrame);
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      tiltElements.forEach(element => {
        element.style.removeProperty("--tilt-x");
        element.style.removeProperty("--tilt-y");
      });
      navLinks.forEach((link, index) => {
        const original = originalCurrent[index];
        if (original) link.setAttribute("aria-current", original);
        else link.removeAttribute("aria-current");
      });
    };
  }, [chapters]);

  return <>
    <div className="reading-progress" role="progressbar" aria-label="网页阅读进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ transform: `scaleX(${progress / 100})` }}/></div>
    <nav className="reading-dock" aria-label="栏目快捷导航" hidden={!visible || !dock}>
      {chapters.map((chapter, index) => <a href={`#${chapter.id}`} key={chapter.id} aria-current={active === chapter.id ? "location" : undefined}><span aria-hidden="true">0{index + 1}</span>{chapter.label}</a>)}
      <a className="reading-back-top" href="#top" aria-label="返回顶部" title={`阅读进度 ${progress}% · 返回顶部`} onClick={() => document.querySelector<HTMLAnchorElement>(".wordmark")?.focus({ preventScroll: true })}>↑</a>
    </nav>
  </>;
}

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const resetTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);
  async function copy() {
    window.clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      resetTimer.current = window.setTimeout(() => setStatus("idle"), 2400);
    } catch {
      setStatus("failed");
    }
  }
  return <div className="copy-email-row"><button className="copy-email" type="button" onClick={copy}><span aria-hidden="true">⧉</span><span aria-live="polite">{status === "copied" ? "已复制 ✓" : "复制邮箱"}</span></button>{status === "failed" && <span className="copy-email-note" role="status">请长按上方邮箱复制。</span>}</div>;
}
