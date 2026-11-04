import { ModuleShell } from '../module-shell';
import { Toolbox } from '../toolbox';
export const metadata={title:'我的小工具 · 椰奶作品集'};
export default function Page(){return <ModuleShell slug="tools" chapters={[{id:'tools',label:'打开工具箱'}]}><Toolbox/></ModuleShell>;}
