import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {resolve,join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const base=(process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/,'');
const site=fileURLToPath(new URL(`${process.env.BUILD_OUTPUT_DIR || 'site'}/`,import.meta.url));
const routes=['/','/about/','/liangliang/','/accounts/','/rock/','/montirivers/','/tools/','/aigc/','/videos/'];
const pages=new Map();
for(const route of routes)pages.set(route,await readFile(join(site,route,'index.html'),'utf8'));
let count=0;
for(const [route,html] of pages){
  assert.match(html,/<title>[^<]*椰奶作品集/);
  if(route!=='/')assert.match(html,/<h1\b/);
  for(const [,reference] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
    if(/^(?:data:|mailto:|https?:|tel:)/.test(reference))continue;
    const url=new URL(reference,`https://example.com${base}${route}`);
    assert.ok(url.pathname.startsWith(`${base}/`),`Escapes site base: ${route} ${reference}`);
    const path=decodeURIComponent(url.pathname.slice(base.length));
    if(pages.has(path)){
      if(url.hash)assert.ok(pages.get(path).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`Missing anchor: ${route} ${reference}`);
    }else await access(resolve(site,`.${path}`));
    count++;
  }
}
assert.match(pages.get('/'),new RegExp(`<meta name="portfolio-base" content="${base}">`));
const script=await readFile(join(site,'app.js'),'utf8');
assert.ok(script.includes('location.assign(`${portfolioBase}${item.url}`)'));
for(const route of routes.slice(1))assert.ok(script.includes(`url:'${route}'`),`Missing interaction destination ${route}`);
assert.ok(!pages.get('/accounts/').includes('id="rock-account"'));
assert.ok(pages.get('/rock/').includes('id="rock-account"'));
for(const route of ['/aigc/','/videos/'])assert.equal([...pages.get(route).matchAll(/class="coming-card"/g)].length,2);
console.log(`Verified ${pages.size} pages and ${count} local links/assets under ${base || '/'}.`);
