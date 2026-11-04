import { ModuleShell } from '../module-shell';
import { PersonalAccounts } from '../portfolio-content';
export const metadata={title:'椰奶没喝饱 · 椰奶作品集'};
export default function Page(){return <ModuleShell slug="accounts" chapters={[{id:'yenai-account',label:'椰奶没喝饱'},{id:'yenai-audience',label:'受众分析'},{id:'yenai-origin',label:'从零起号'}]}><PersonalAccounts includeRock={false}/></ModuleShell>;}
