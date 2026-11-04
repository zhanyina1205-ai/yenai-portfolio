"use client";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "./asset-path";
import { travelPhotos, creativePhotos, dogPhotos } from "./photo-data";
import type { Photo } from "./photo-data";
const groups = [{ name: "穿搭与旅行", photos: travelPhotos }, { name: "绘画与手作", photos: creativePhotos }, { name: "我的小狗", photos: dogPhotos }];
const photos = groups.flatMap(group => group.photos);

export function PortfolioGallery() {
  const [group, setGroup] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;
  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current;
    if (!modal) return;
    modal.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { modal.close(); document.body.style.overflow = overflow; };
  }, [isOpen]);
  function close() { setActive(null); opener.current?.focus(); }
  function turn(direction: number) {
    setActive(index => {
      if (index === null) return null;
      const currentPhoto = photos[index];
      const selected = groups.find(item => item.photos.some(photo => photo.src === currentPhoto.src))!.photos;
      const position = selected.findIndex(photo => photo.src === currentPhoto.src);
      const next = selected[(position + direction + selected.length) % selected.length];
      return photos.findIndex(photo => photo.src === next.src);
    });
  }
  function open(photo: Photo, button: HTMLButtonElement) { opener.current = button; setActive(photos.findIndex(item => item.src === photo.src)); }
  return <>
    <div className="gallery-controls" role="group" aria-label="相册分类">{groups.map((item, index) => <button key={item.name} type="button" onClick={() => setGroup(index)} aria-pressed={group === index}>{item.name}<span>{String(item.photos.length).padStart(2, "0")}</span></button>)}<span className="gallery-hint">点开照片，看看细节 ↗</span></div>
    {groups.map((item, index) => <div className="gallery-grid" key={item.name} hidden={group !== index} aria-label={item.name}>{item.photos.map((photo, photoIndex) => <button type="button" className="gallery-photo" key={photo.src} onClick={event => open(photo, event.currentTarget)} aria-label={`放大照片：${photo.caption}`}><span className="gallery-photo-number">{String(photoIndex + 1).padStart(2, "0")}</span><img src={assetPath(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" /><span className="gallery-caption">{photo.caption}<span aria-hidden="true">↗</span></span></button>)}</div>)}
    <p className="gallery-source">个人影像与手作记录 · 图片来自个人说明书</p>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Native modal dialog supports close and arrow navigation. */}
    <dialog ref={dialog} className="photo-dialog" aria-label="照片大图" onCancel={event => {event.preventDefault(); close();}} onClick={event => {if (event.target === event.currentTarget) close();}} onKeyDown={event => {if (event.key === "ArrowLeft" || event.key === "ArrowRight") {event.preventDefault(); turn(event.key === "ArrowLeft" ? -1 : 1);}}}>
      {active !== null && <div className="lightbox-content"><button type="button" className="lightbox-close" onClick={close} aria-label="关闭相册">×</button><img src={assetPath(photos[active].src)} alt={photos[active].alt} width={photos[active].width} height={photos[active].height} /><div className="lightbox-controls"><button type="button" onClick={() => turn(-1)} aria-label="上一张照片">←</button><p aria-live="polite">{photos[active].caption}</p><button type="button" onClick={() => turn(1)} aria-label="下一张照片">→</button></div></div>}
    </dialog>
  </>;
}
