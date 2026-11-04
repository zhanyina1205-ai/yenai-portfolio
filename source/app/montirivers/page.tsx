import { ModuleShell } from '../module-shell';
import { MontiriversCase } from '../brand-and-shop';
export const metadata={title:'山河集 · 椰奶作品集'};
export default function Page(){return <ModuleShell slug="montirivers" chapters={[{id:'montirivers',label:'品牌与受众'},{id:'montirivers-work',label:'我的工作'},{id:'montirivers-backstage',label:'拍摄花絮'},{id:'montirivers-matrix',label:'店员矩阵'}]}><MontiriversCase/></ModuleShell>;}
