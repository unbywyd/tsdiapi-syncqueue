import "reflect-metadata";
import type { AppContext, AppPlugin } from "@tsdiapi/server";
import { SyncQueueProvider } from "./provider.js";
export { SyncQueueProvider } from "./provider.js";
declare class App implements AppPlugin {
    name: string;
    context: AppContext;
    provider: typeof SyncQueueProvider;
}
export default function createPlugin(): App;
export declare const getSyncQueueProvider: () => typeof SyncQueueProvider;
//# sourceMappingURL=index.d.ts.map