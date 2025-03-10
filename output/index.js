import "reflect-metadata";
import { SyncQueueProvider } from "./provider.js";
export { SyncQueueProvider } from "./provider.js";
class App {
    name = 'syncqueue';
    context;
    provider = SyncQueueProvider;
}
export default function createPlugin() {
    return new App();
}
export const getSyncQueueProvider = () => SyncQueueProvider;
//# sourceMappingURL=index.js.map