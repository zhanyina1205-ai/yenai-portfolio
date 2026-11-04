import { ModuleShell } from '../module-shell';
import { PersonalAccounts } from '../portfolio-content';
export const metadata={title:'椰奶没喝饱 · 椰奶作品集'};
export default function Page(){return <ModuleShell slug="accounts" chapters={[{id:'yenai-account',label:'椰奶没喝饱'},{id:'yenai-audience',label:'受众分析'},{id:'yenai-origin',label:'从零起号'},{id:'selected-notes',label:'代表作'},{id:'workflow',label:'创作流程'}]}><PersonalAccounts includeRock={false}/></ModuleShell>;}
