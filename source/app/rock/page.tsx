import {ModuleShell} from '../module-shell';
import {RockAccount} from '../brand-and-shop';
export const metadata={title:'摇滚椰奶冻 · 椰奶作品集'};
export default function Page(){return <ModuleShell slug="rock" chapters={[{id:'rock-account',label:'我的饰品小店'}]}><RockAccount/></ModuleShell>;}
