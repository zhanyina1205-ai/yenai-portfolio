"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent, TouchEvent } from "react";
import { assetPath } from "./asset-path";
import { dogPhotos } from "./photo-data";
import type { Photo } from "./photo-data";

export function PhotoGallery({ photos = dogPhotos, label = "小狗生活相册" }: { photos?: Photo[]; label?: string }) {
  const [position, setPosition] = useState(Math.floor((photos.length - 1) / 2));
  const [touchMode, setTouchMode] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const touchRef = useRef<{ x: number; y: number } | null>(null);
  const isOpen = active !== null;
  const current = Math.round(position);
  const clamp = (value: number) => Math.max(0, Math.min(value, photos.length - 1));

  useEffect(() => {
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setTouchMode(coarse.matches);
    update();
    coarse.addEventListener("change", update);
    return () => coarse.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; dialog.close(); };
  }, [isOpen]);

  function followMouse(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || isOpen) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (event.clientX - bounds.left - 24) / (bounds.width - 48)));
    setPosition(progress * (photos.length - 1));
  }
  function focusPhoto(index: number) {
    setPosition(clamp(index));
  }
  function open(index: number, button: HTMLButtonElement) {
    openerRef.current = button;
    setActive(index);
  }
  function close() {
    dialogRef.current?.close();
    setActive(null);
    openerRef.current?.focus();
  }
  function turnPhoto(direction: number) {
    setActive(index => index === null ? null : (index + direction + photos.length) % photos.length);
  }
  function keyboard(event: KeyboardEvent<HTMLElement>, modal: boolean) {
    if (event.altKey || event.ctrlKey || event.metaKey || (!modal && isOpen)) return;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      if (modal) turnPhoto(direction);
      else focusPhoto(current + direction);
    }
    if (!modal && (event.key === "Home" || event.key === "End")) {
      event.preventDefault();
      focusPhoto(event.key === "Home" ? 0 : photos.length - 1);
    }
  }
  function startSwipe(event: TouchEvent<HTMLElement>) {
    const touch = event.touches[0];
    touchRef.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
  }
  function finishSwipe(event: TouchEvent<HTMLElement>, modal: boolean) {
    const start = touchRef.current;
    touchRef.current = null;
    const touch = event.changedTouches[0];
    if (!start || !touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const direction = dx < 0 ? 1 : -1;
    if (modal) turnPhoto(direction);
    else focusPhoto(current + direction);
  }

  return <>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex -- The named gallery region supports arrow, Home and End keyboard navigation. */}
    <div className="album" role="region" aria-label={`${label}翻页浏览`} aria-roledescription="横向照片带" tabIndex={0} onKeyDown={event => keyboard(event, false)}>
      <div className="album-heading"><span>{label}</span><span>{photos.length} 张照片</span></div>
      <div className="gallery-film" onPointerMove={followMouse} onTouchStart={startSwipe} onTouchEnd={event => finishSwipe(event, false)}>
        {photos.map((photo, index) => {
          const offset = index - position;
          const depth = Math.min(Math.abs(offset), 3);
          return <button type="button" className="photo-card film-card" key={photo.src}
            style={{ transform: `translateX(calc(-50% + ${offset.toFixed(4)} * (var(--film-card-width) + 18px))) rotateY(${Math.max(-30, Math.min(30, -offset * 10))}deg) scale(${1 + depth * 0.026})`, zIndex: 20 - Math.round(depth * 3) }}
            tabIndex={Math.abs(offset) > 2 ? -1 : 0}
            onFocus={() => focusPhoto(index)} onClick={event => open(index, event.currentTarget)} aria-label={`放大照片：${photo.caption}`}>
            <span className="tape" aria-hidden="true" />
            <img src={assetPath(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" draggable={false} />
            <span className="photo-caption">{photo.caption}<small>{photo.note}</small></span>
            <span className="photo-expand" aria-hidden="true">＋</span>
          </button>;
        })}
      </div>
      <div className="film-progress" aria-hidden="true"><span style={{ left: `${photos.length > 1 ? position / (photos.length - 1) * 100 : 0}%` }} /></div>
      <p className="album-status" role="status">正在看第 {current + 1} 张 · 共 {photos.length} 张</p>
      <div className="album-thumbnails" role="group" aria-label={`${label}全部照片`}>
        {photos.map((photo, index) => <button type="button" key={photo.src} onClick={() => focusPhoto(index)} aria-label={`查看第 ${index + 1} 张：${photo.caption}`} aria-pressed={index === current} className={index === current ? "thumbnail-visible" : undefined}>
          <img src={assetPath(photo.src)} alt="" width={photo.width} height={photo.height} loading="lazy" />
          <span>{index + 1}</span>
        </button>)}
      </div>
      <p className="album-instructions">{touchMode ? "左右滑动，翻看相册" : "左右移动鼠标，翻看相册"} · 点开照片看大图</p>
    </div>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Native modal dialog handles keyboard navigation and backdrop dismissal. */}
    <dialog ref={dialogRef} className="photo-dialog" aria-label={label}
      onCancel={event => { event.preventDefault(); close(); }}
      onClick={event => { if (event.target === event.currentTarget) close(); }}
      onKeyDown={event => keyboard(event, true)} onTouchStart={startSwipe} onTouchEnd={event => finishSwipe(event, true)}>
      {active !== null && <div className="lightbox-content">
        <button type="button" className="lightbox-close" onClick={close} aria-label="关闭相册">×</button>
        <img src={assetPath(photos[active].src)} alt={photos[active].alt} width={photos[active].width} height={photos[active].height} />
        <div className="lightbox-controls">
          <button type="button" onClick={() => turnPhoto(-1)} aria-label="上一张照片">上一张</button>
          <p aria-live="polite">{photos[active].caption}<span>{active + 1} / {photos.length}</span></p>
          <button type="button" onClick={() => turnPhoto(1)} aria-label="下一张照片">下一张</button>
        </div>
      </div>}
    </dialog>
  </>;
}
