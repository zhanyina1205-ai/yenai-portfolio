"use client";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "./asset-path";

const sheets = [
  [2748, "表头与镜头 1 至 5"], [3144, "镜头 6 至 11 上半部分"],
  [3144, "镜头 11 续至镜头 16 开头"], [3144, "镜头 16 续至镜头 21 上半部分"],
  [1806, "镜头 21 续至镜头 24，品牌字标收尾"],
] as const;

export function GoldScriptReader() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    if (!open || !dialog.current) return;
    const el = dialog.current;
    el.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { el.close(); document.body.style.overflow = previous; };
  }, [open]);
  return <>
    <button type="button" aria-haspopup="dialog" className="gold-preview" onClick={() => {setZoom(false);setOpen(true);}}>
      <img src={assetPath("/montirivers/gold-script/table-detail.webp")} alt="" loading="lazy"/>
      <span>查看完整分镜表 <b aria-hidden="true">↗</b></span>
    </button>
    <dialog ref={dialog} className="gold-reader" aria-labelledby="gold-reader-title"
      onCancel={event => {event.preventDefault();setOpen(false);}}>
      {open && <div className="gold-reader-inner">
        <header><div><small>山河集 / 24 个分镜</small><h2 id="gold-reader-title">《阅读一篇黄金》分镜脚本</h2></div>
          <button type="button" aria-pressed={zoom} onClick={()=>setZoom(!zoom)}>{zoom ? "适应宽度" : "放大"}</button>
          <button className="gold-close" type="button" onClick={()=>setOpen(false)} aria-label="关闭脚本">×</button>
        </header>
        <div className="gold-scroll" tabIndex={0} role="region" aria-label="完整分镜表，向下滚动阅读">
          <div className={zoom ? "gold-zoom" : undefined}>{sheets.map(([height, text], index) =>
            <img key={index} width="2103" height={height} src={assetPath(`/montirivers/gold-script/table-${index+1}.webp`)} alt={text}/>
          )}</div>
        </div>
      </div>}
    </dialog>
  </>;
}
