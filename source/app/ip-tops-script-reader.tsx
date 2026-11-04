"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "./asset-path";
import script from "./ip-tops-script.json";

export function IpTopsScriptReader() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    if (!open || !element) return;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return <>
    <button className="document-media ip-script-thumbnail" type="button" aria-haspopup="dialog"
      aria-label="预览《7套夏日上衣分享合集脚本》完整分镜表"
      onClick={() => { setZoom(false); setOpen(true); }}>
      <img src={assetPath("/ip-case/script/preview.webp")} alt="分镜表开头，包含穿搭参考、画面安排与口播文案" loading="lazy" />
      <span className="media-enlarge" aria-hidden="true">↗</span>
    </button>
    <dialog ref={dialog} className="gold-reader ip-script-reader" aria-labelledby="ip-script-title"
      onCancel={event => { event.preventDefault(); setOpen(false); }}>
      {open && <div className="gold-reader-inner">
        <header>
          <div><small>是亮亮 / 镜号 01—47</small><h2 id="ip-script-title">7套夏日上衣分享合集脚本</h2></div>
          <button type="button" aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? "还原" : "放大"}</button>
          <button type="button" className="gold-close" aria-label="关闭脚本" onClick={() => setOpen(false)}>×</button>
        </header>
        <div className="ip-script-scroll" role="region" aria-label="完整分镜表" tabIndex={0}>
          <table className={zoom ? "ip-shots enlarged" : "ip-shots"} aria-label="夏日上衣合集逐镜脚本">
            <thead><tr>{script.headers.map(label => <th key={label} scope="col">{label}</th>)}</tr></thead>
            <tbody>{script.rows.map(row => <tr key={row[0].text}>
              {row.map((cell, index) => <td key={script.headers[index]} data-label={script.headers[index]}>
                {cell.text}
                {cell.images?.map((image, i) => <figure key={i}>
                  <img src={assetPath("/ip-case/script/" + image.file)} alt={image.caption} loading="lazy" />
                  <figcaption>{image.caption}</figcaption>
                </figure>)}
              </td>)}
            </tr>)}</tbody>
          </table>
        </div>
      </div>}
    </dialog>
  </>;
}
