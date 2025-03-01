import "reflect-metadata";
import type { AppContext, AppPlugin } from "@tsdiapi/server";
import { SyncQueueProvider } from "./provider";
export { SyncQueueProvider } from "./provider";

class App implements AppPlugin {
    name = 'syncqueue';
    context: AppContext;
    provider = SyncQueueProvider;
}

export default function createPlugin() {
    return new App();
}

export const getSyncQueueProvider = () => SyncQueueProvider;