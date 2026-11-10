import { assetPath } from '../asset-path';
import { ModuleShell } from '../module-shell';
import './video-works.css';

export const metadata = { title: '我的剪辑作品 · 椰奶作品集' };

export default function Page() {
  const video = assetPath('/video-works/learn-styling.mp4');
  const cover = assetPath('/video-works/learn-styling-cover.png');

  return (
    <ModuleShell slug="videos" chapters={[{ id: 'coming-works', label: '普通人3步学穿搭' }]}>
      <section className="video-works" id="coming-works" aria-labelledby="styling-video-title">
        <article className="video-work">
          <video
            className="video-work-player"
            aria-labelledby="styling-video-title"
            src={video}
            poster={cover}
            width={1046}
            height={1386}
            controls
            playsInline
            preload="none"
          >
            <a href={video}>打开《普通人3步学穿搭》视频</a>
          </video>
          <div className="video-work-copy">
            <p className="video-work-index">WORK / 01</p>
            <h2 id="styling-video-title">普通人3步学穿搭</h2>
            <p>视频剪辑 · 01:16</p>
          </div>
        </article>
        <div className="video-work-next">
          <span>WORK / 02</span>
          <span>视频作品待补充</span>
        </div>
      </section>
    </ModuleShell>
  );
}
