"use client";

import { assetPath } from "./asset-path";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export function YenaiIntro() {
  const [visible, setVisible] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const audio = useRef<HTMLAudioElement>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  function toggleSound() {
    const sound = audio.current;
    if (!sound) return;
    if (!sound.paused) { sound.pause(); return; }
    // A deliberate click unlocks audio. Restart both tracks together, never mid-cue.
    sound.currentTime = 0;
    void sound.play().then(() => {
      if (!panel.current) { sound.pause(); return; }
      panel.current.getAnimations({ subtree: true }).forEach(animation => {
        animation.currentTime = 0;
        animation.play();
      });
      sound.currentTime = 0;
      if (exitTimer.current) clearTimeout(exitTimer.current);
      exitTimer.current = setTimeout(() => setVisible(false), 5850);
    }).catch(() => {});
  }

  useEffect(() => {
    // Mount each playback after hydration so loading cannot consume its timeline.
    const start = () => {
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setVisible(true);
    };
    const homepageEntry = !location.hash || ["#top", "#modules", "#contact"].includes(location.hash);
    const frame = homepageEntry ? requestAnimationFrame(start) : null;
    window.addEventListener("yenai:replay", start);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("yenai:replay", start);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const canvas = document.querySelector<HTMLElement>(".site-canvas");
    const previousInert = canvas?.inert ?? false;
    const previousOverflow = document.documentElement.style.overflow;
    if (canvas) canvas.inert = true;
    document.documentElement.style.overflow = "hidden";
    panel.current?.focus({ preventScroll: true });
    exitTimer.current = setTimeout(() => setVisible(false), 5850);
    const sound = audio.current;
    if (sound && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sound.volume = .75;
      void sound.play().catch(() => {}); // Browser autoplay policy: offer the explicit replay button.
    }
    const silenceWhenHidden = () => { if (document.hidden) sound?.pause(); };
    document.addEventListener("visibilitychange", silenceWhenHidden);
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const reduce = () => { if (preference.matches) setVisible(false); };
    preference.addEventListener("change", reduce);
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
      if (event.key === "Tab") {
        event.preventDefault();
        const buttons = Array.from(panel.current?.querySelectorAll<HTMLButtonElement>("button") ?? []);
        const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
        const next = current < 0 ? (event.shiftKey ? buttons.length - 1 : 0) : (current + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length;
        buttons[next]?.focus();
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      if (exitTimer.current) clearTimeout(exitTimer.current);
      sound?.pause();
      document.removeEventListener("visibilitychange", silenceWhenHidden);
      document.removeEventListener("keydown", keydown);
      preference.removeEventListener("change", reduce);
      if (canvas) canvas.inert = previousInert;
      document.documentElement.style.overflow = previousOverflow;
      document.querySelector<HTMLAnchorElement>(".portfolio-header .wordmark, .site-header .wordmark")?.focus({ preventScroll: true });
    };
  }, [visible]);

  if (!visible) return null;
  return <section ref={panel} className="yenai-intro" role="dialog" aria-modal="true" aria-label="YENAI 个人网站开屏" tabIndex={-1}>
    <div className="yenai-satin-scene" aria-hidden="true">
      <img className="yenai-satin-image" src={assetPath("/intro/yenai-satin.png")} alt="" width={1672} height={941} loading="eager"/>
      <div className="yenai-satin-shade"/>
      <div className="yenai-film-frame">
        <span className="yenai-frame-top">YENAI · CONTENT · STYLE · PERSONAL ARCHIVE · YENAI · CONTENT · STYLE · PERSONAL ARCHIVE</span>
        <span className="yenai-frame-bottom">YENAI · CONTENT · STYLE · PERSONAL ARCHIVE · YENAI · CONTENT · STYLE · PERSONAL ARCHIVE</span>
        <span className="yenai-frame-left">YENAI · PERSONAL PORTFOLIO · 2026</span>
        <span className="yenai-frame-right">YENAI · PERSONAL PORTFOLIO · 2026</span>
      </div>
    </div>
    <div className="yenai-intro-word-stage" aria-label="YENAI">
    <div className="yenai-intro-mark" aria-hidden="true">
      {"YENAI".split("").map((letter, index) => <span key={index} aria-hidden="true" className="yenai-intro-letter" style={{ "--letter-index": index } as CSSProperties}>{letter}</span>)}
    </div>
    <div className="yenai-satin-title" aria-hidden="true">
      {/* Custom outlines follow the reference's flat stems and rounded horizontal terminals. */}
      <svg viewBox="0 0 1090 330" focusable="false" fill="currentColor">
        <path d="M0 0H54L113 125 172 0H226L139 183V330H87V183Z"/>
        <path transform="translate(267)" d="M20 0H188A23 23 0 0 1 188 46H51V140H171A23 23 0 0 1 171 186H51V284H188A23 23 0 0 1 188 330H20Q0 330 0 310V20Q0 0 20 0Z"/>
        <path transform="translate(512)" d="M0 330V0H52L169 232V0H218V330H166L49 98V330Z"/>
        <path transform="translate(772)" fillRule="evenodd" d="M0 330 89 0H141L230 330H174L155 268H72L53 330ZM86 222H142L114 119Z"/>
        <path transform="translate(1040)" d="M0 0H50V330H0Z"/>
      </svg>
    </div>
    </div>
    {/* eslint-disable-next-line jsx-a11y/media-has-caption -- Decorative non-speech accents mirror the visible letter and scene transitions. */}
    <audio aria-label="开屏音效（无对白）" ref={audio} src={assetPath("/intro/yenai-opening-sound.mp3")} preload="auto" onPlaying={() => setSoundOn(true)} onPause={() => setSoundOn(false)}/>
    <button className="yenai-intro-sound" type="button" onClick={toggleSound} aria-pressed={soundOn}>{soundOn ? "声音已开 · 静音" : "开启声音 · 重播"}</button>
    <button className="yenai-intro-skip" type="button" onClick={() => setVisible(false)}>跳过 <span aria-hidden="true">↗</span></button>
  </section>;
}
