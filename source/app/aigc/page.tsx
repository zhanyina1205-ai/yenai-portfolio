import { assetPath } from '../asset-path';
import { ModuleShell } from '../module-shell';
import './aigc-works.css';

export const metadata = { title: '我的 AIGC · 椰奶作品集' };

export default function Page() {
  const videoUrl = assetPath('/aigc-works/yenai-magic-show.mp4');
  return (
    <ModuleShell slug="aigc" chapters={[
      { id: 'magic-show', label: 'Yenai’s Magic Show' },
      { id: 'next-aigc-work', label: '下一部作品' },
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
          <article className="coming-card" id="next-aigc-work" aria-label="AIGC 作品预留位 2">
            <div className="coming-card-meta"><span>WORK / 02</span><span>待补充</span></div>
            <div className="coming-canvas" aria-hidden="true"><span className="coming-mark">✧</span><span>IMAGINATION IN PROGRESS</span></div>
            <div className="coming-card-copy">
              <span>02 / AIGC EXPLORATION</span>
              <h3>AIGC 作品 02</h3>
              <p>作品预留位 · 示例排版<br/>作品图、创作思路与制作过程将在完成后补充。</p>
              <span className="coming-card-label">尚未发布</span>
            </div>
          </article>
        </div>
      </section>
    </ModuleShell>
  );
}
