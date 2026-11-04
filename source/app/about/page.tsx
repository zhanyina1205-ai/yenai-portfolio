import { ModuleShell } from '../module-shell';
import { Biography } from '../portfolio-content';
export const metadata={title:'个人介绍 · 椰奶作品集'};
export default function Page(){return <ModuleShell slug="about" chapters={[{id:'about',label:'个人档案'}]}><Biography/></ModuleShell>;}
