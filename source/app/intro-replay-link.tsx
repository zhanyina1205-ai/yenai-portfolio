"use client";

import { assetPath } from "./asset-path";

export function IntroReplayLink() {
  return <a href={assetPath("/?intro=1#top")} onClick={event => {
    if (location.pathname.replace(/\/$/, "") === assetPath("/").replace(/\/$/, "")) {
      event.preventDefault();
      window.dispatchEvent(new Event("yenai:replay"));
    }
  }}>重播开屏 ↗</a>;
}
