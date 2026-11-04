"use client";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "./asset-path";

export function DocumentMedia({src,previewSrc,alt,className="",label="查看原图"}:{src:string;previewSrc?:string;alt:string;className?:string;label?:string}) {
 const [open,setOpen]=useState(false);
 const modal=useRef<HTMLDialogElement>(null);
 const opener=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(!open)return;
  const dialog=modal.current;if(!dialog)return;
  dialog.showModal();const overflow=document.body.style.overflow;document.body.style.overflow="hidden";
  return()=>{dialog.close();document.body.style.overflow=overflow;};
 },[open]);
 function close(){setOpen(false);opener.current?.focus();}
 return <><button ref={opener} type="button" className={`document-media ${className}`} onClick={()=>setOpen(true)} aria-label={`${label}：${alt}`}><img src={assetPath(previewSrc||src)} alt={alt} loading="lazy"/><span className="media-enlarge" aria-hidden="true">↗</span></button>
 {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events -- Native dialog supplies Escape dismissal through onCancel; the click handler only dismisses the backdrop. */}
 <dialog ref={modal} className="image-dialog" aria-label={alt} onCancel={event=>{event.preventDefault();close();}} onClick={event=>{if(event.target===event.currentTarget)close();}}>{open&&<div><button className="dialog-close" type="button" aria-label="关闭原图" onClick={close}>×</button><img src={assetPath(src)} alt={alt}/><p>{alt}</p></div>}</dialog></>;
}
