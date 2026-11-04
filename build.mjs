import {spawnSync} from 'node:child_process';
import {mkdir,cp,copyFile,readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=new URL('./',import.meta.url),source=new URL('source/',root),site=new URL(`${process.env.BUILD_OUTPUT_DIR || 'site'}/`,root);
const base=(process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/,'');
if(base && !/^\/[a-zA-Z0-9_-]+$/.test(base))throw new Error('Invalid portfolio base path');
// The animation script has one editable source for both local and hosted builds.
await copyFile(new URL('tea/app.js',source),new URL('public/app.js',source));
await copyFile(new URL('tea/style.css',source),new URL('public/style.css',source));
const build=spawnSync('npm',['run','build'],{cwd:fileURLToPath(source),stdio:'inherit',env:{...process.env,GITHUB_PAGES:'1',NEXT_PUBLIC_BASE_PATH:base}});
if(build.status!==0)process.exit(build.status||1);
await mkdir(site,{recursive:true});
await cp(new URL('dist/client/',source),site,{recursive:true});
for(const route of ['about','liangliang','accounts','rock','montirivers','tools','aigc','videos']){
  const folder=new URL(`${route}/`,site);
  await mkdir(folder,{recursive:true});
  await copyFile(new URL(`dist/client/${route}.html`,source),new URL('index.html',folder));
}
let entrance=(await readFile(new URL('tea/index.html',source),'utf8')).replace('<meta name="portfolio-base" content="">',`<meta name="portfolio-base" content="${base}">`);
// Version the entrance assets so a new release cannot reuse an older hidden transition.
for(const asset of ['app.js','style.css']){
  const version=createHash('sha256').update(await readFile(new URL(`tea/${asset}`,source))).digest('hex').slice(0,12);
  entrance=entrance.replace(`"${asset}"`,`"${asset}?v=${version}"`);
}
await writeFile(new URL('index.html',site),entrance);
await writeFile(new URL('.nojekyll',site),'');
console.log('椰奶作品集已生成：'+fileURLToPath(site));
