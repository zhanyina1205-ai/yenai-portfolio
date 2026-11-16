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
      <section className="aigc-works" id="coming-works" aria-label="AIGC 作品列表">
        <div className="coming-grid">
          <article className="coming-card" id="magic-show" aria-labelledby="magic-show-title">
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
              <span>WORK / 01</span>
              <h3 id="magic-show-title">Yenai’s Magic Show</h3>
              <p>AIGC 影像作品 · 00:15</p>
            </div>
          </article>
          <article className="coming-card" id="next-aigc-work" aria-labelledby="weekly-outfits-title">
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
              <span>WORK / 02</span>
              <h3 id="weekly-outfits-title">挑战一周穿搭不重样</h3>
              <p>AIGC 影像作品 · 00:33</p>
            </div>
          </article>
        </div>
      </section>
    </ModuleShell>
  );
}
