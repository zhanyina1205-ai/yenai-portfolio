import { assetPath } from '../asset-path';
import { ModuleShell } from '../module-shell';
import './video-works.css';

export const metadata = { title: '我的剪辑作品 · 椰奶作品集' };

const works = [
  {
    id: 'coming-works',
    title: '普通人3步学穿搭',
    duration: '01:16',
    video: '/video-works/learn-styling.mp4',
    cover: '/video-works/learn-styling-cover.png',
    width: 1046,
    height: 1386,
  },
  {
    id: 'cool-city-style',
    title: '冷都女穿搭',
    duration: '01:18',
    video: '/video-works/cool-city-style.mp4',
    cover: '/video-works/cool-city-style-cover.jpg',
    width: 950,
    height: 1267,
  },
];

export default function Page() {
  return (
    <ModuleShell slug="videos" chapters={works.map(({ id, title }) => ({ id, label: title }))}>
      <section className="video-works" aria-label="剪辑作品列表">
        {works.map((work, index) => {
          const titleId = `${work.id}-title`;
          const videoUrl = assetPath(work.video);
          return (
            <article className="video-work" id={work.id} key={work.id} aria-labelledby={titleId}>
              <video
                className="video-work-player"
                aria-labelledby={titleId}
                src={videoUrl}
                poster={assetPath(work.cover)}
                width={work.width}
                height={work.height}
                controls
                playsInline
                preload="none"
              >
                <a href={videoUrl}>打开《{work.title}》视频</a>
              </video>
              <div className="video-work-copy">
                <p className="video-work-index">WORK / {String(index + 1).padStart(2, '0')}</p>
                <h2 id={titleId}>{work.title}</h2>
                <p>视频剪辑 · {work.duration}</p>
              </div>
            </article>
          );
        })}
      </section>
    </ModuleShell>
  );
}
