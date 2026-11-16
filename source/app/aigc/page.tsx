import { assetPath } from '../asset-path';
import { ModuleShell } from '../module-shell';
import './aigc-works.css';

export const metadata = { title: '我的 AIGC · 椰奶作品集' };

export default function Page() {
  const videoUrl = assetPath('/aigc-works/yenai-magic-show.mp4');
  const secondVideoUrl = assetPath('/aigc-works/weekly-outfits.mp4');
  return (
    <ModuleShell slug="aigc" chapters={[
      { id: 'magic-show', label: 'Yenai’s Magic Show' },
      { id: 'next-aigc-work', label: '挑战一周穿搭不重样' },
    ]}>
      <section className="coming-works aigc-works" id="coming-works" aria-labelledby="coming-title">
        <div className="coming-intro">
          <p className="coming-script">A little imagination.</p>
          <h2 id="coming-title">想象，正在发生。</h2>
          <p>这里收录我的 AIGC 创作。</p>
        </div>
        <div className="coming-grid">
          <article className="coming-card" id="magic-show" aria-labelledby="magic-show-title">
            <div className="coming-card-meta"><span>WORK / 01</span><span>AIGC 影像</span></div>
            <video
              className="aigc-work-player"
              src={videoUrl}
              poster={assetPath('/aigc-works/yenai-magic-show-cover.jpg')}
              width={954}
              height={1272}
              controls
              playsInline
              preload="none"
              aria-labelledby="magic-show-title"
            >
              <a href={videoUrl}>打开 Yenai’s Magic Show 视频</a>
            </video>
            <div className="coming-card-copy">
              <span>01 / AIGC FILM</span>
              <h3 id="magic-show-title">Yenai’s Magic Show</h3>
              <p>AIGC 影像作品 · 00:15</p>
            </div>
          </article>
          <article className="coming-card" id="next-aigc-work" aria-labelledby="weekly-outfits-title">
            <div className="coming-card-meta"><span>WORK / 02</span><span>AIGC 影像</span></div>
            <video
              className="aigc-work-player"
              src={secondVideoUrl}
              poster={assetPath('/aigc-works/weekly-outfits-cover.jpg')}
              width={720}
              height={960}
              controls
              playsInline
              preload="none"
              aria-labelledby="weekly-outfits-title"
            >
              <a href={secondVideoUrl}>打开《挑战一周穿搭不重样》视频</a>
            </video>
            <div className="coming-card-copy">
              <span>02 / AIGC FILM</span>
              <h3 id="weekly-outfits-title">挑战一周穿搭不重样</h3>
              <p>AIGC 影像作品 · 00:33</p>
            </div>
          </article>
        </div>
      </section>
    </ModuleShell>
  );
}
