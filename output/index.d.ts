import "reflect-metadata";
import type { AppContext, AppPlugin } from "@tsdiapi/server";
import { SyncQueueProvider } from "./provider";
export { SyncQueueProvider } from "./provider";
declare class App implements AppPlugin {
    name: string;
    context: AppContext;
    provider: typeof SyncQueueProvider;
}
export default function createPlugin(): App;
export declare const getSyncQueueProvider: () => typeof SyncQueueProvider;
//# sourceMappingURL=index.d.ts.map