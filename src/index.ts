import type { AppContext, AppPlugin } from "@tsdiapi/server";
import { SyncQueueProvider } from "./provider.js";
export { SyncQueueProvider } from "./provider.js";

class App implements AppPlugin {
    name = 'syncqueue';
    context: AppContext;
    provider = SyncQueueProvider;
}

export default function createPlugin() {
    return new App();
}

export const getSyncQueueProvider = () => SyncQueueProvider;