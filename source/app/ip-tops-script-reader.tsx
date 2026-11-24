"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "./asset-path";

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
      aria-label="预览《出片夏日小吊带合集脚本》完整截图"
      onClick={() => { setZoom(false); setOpen(true); }}>
      <img src={assetPath("/ip-case/script/feishu-preview.webp")} alt="飞书脚本截图，包含镜号、人物画面、搭配参考、画面安排、文案、拍摄与剪辑和服装卖点" loading="lazy" />
      <span className="media-enlarge" aria-hidden="true">↗</span>
    </button>
    <dialog ref={dialog} className="gold-reader ip-script-reader" aria-labelledby="ip-script-title"
      onCancel={event => { event.preventDefault(); setOpen(false); }}>
      {open && <div className="gold-reader-inner">
        <header>
          <div><small>是亮亮 / 脚本</small><h2 id="ip-script-title">出片夏日小吊带合集脚本</h2></div>
          <a href="https://gcn0sluri72f.feishu.cn/wiki/GDCJwHSjQil9yikMFNmc5Afmnde" target="_blank" rel="noopener noreferrer">飞书原稿 ↗</a>
          <button type="button" aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? "还原" : "放大"}</button>
          <button type="button" className="gold-close" aria-label="关闭脚本" onClick={() => setOpen(false)}>×</button>
        </header>
        <div className="ip-script-scroll" role="region" aria-label="完整分镜表" tabIndex={0}>
          <img
            className={zoom ? "ip-script-capture enlarged" : "ip-script-capture"}
            src={assetPath("/ip-case/script/feishu-full.webp")}
            alt="《出片夏日小吊带合集脚本》完整表格截图"
          />
        </div>
      </div>}
    </dialog>
  </>;
}
