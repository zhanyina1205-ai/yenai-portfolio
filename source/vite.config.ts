import vinext from "vinext";
import {defineConfig} from "vite";
export default defineConfig({base:`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`,plugins:[vinext()]});
