import { DocumentMedia } from "./document-media";
import { assetPath } from "./asset-path";

export function AccountCollage() {
 return <div className="account-collage-wrap" id="my-account">
  <p className="account-collage-kicker">MY STYLE, MY STORY.</p>
  <div className="account-collage">
   <div className="collage-topline"><span>YINA&apos;S DIGITAL SPACE</span><span>PERSONAL / 02</span></div>
   <a className="collage-account-bar" href="https://xhslink.cn/o/ArBwd7GjccM" target="_blank" rel="noopener noreferrer"><span className="collage-avatar" aria-hidden="true">Y</span><span>椰奶没喝饱_<small>小红书 · 穿搭与日常</small></span><span className="collage-bar-arrow" aria-hidden="true">↗</span></a>
   <div className="collage-style-note" aria-hidden="true"><span>MY WARDROBE</span><p>Dress<br/><em>my way.</em></p><small>姐系通勤 / 日常穿搭</small><div className="collage-note-rule"/><span>STYLE, IN EVERYDAY LIFE.</span></div>
   <figure className="collage-photo-note" aria-hidden="true"><img src={assetPath("/account-collage/black-top-pink-skirt.jpg")} alt=""/><figcaption>A little pink.</figcaption></figure>
   <DocumentMedia src="/account-collage/pink-look-original.jpg" previewSrc="/account-collage/pink-look-cutout.png" alt="椰奶的粉色花卉上衣与白色短裤穿搭照片" className="collage-person"/>
   <div className="collage-style-badge" aria-hidden="true"><span>MY</span><b>STYLE</b><span>我的日常</span></div>
   <div className="collage-profile-card"><p>账号主页 <span aria-hidden="true">↗</span></p><DocumentMedia src="/new-document/account-profile.png" alt="椰奶没喝饱_小红书账号主页截图" className="collage-profile" label="查看完整账号主页"/></div>
   <a className="collage-bottom-bar" href="https://xhslink.cn/o/ArBwd7GjccM" target="_blank" rel="noopener noreferrer"><span>穿搭，是我的表达方式。</span><span aria-hidden="true">↗</span></a>
  </div>
  <p className="account-collage-caption">点击人物看原图 · 点击主页卡片看账号截图</p>
 </div>;
}
