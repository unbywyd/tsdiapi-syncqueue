import { AppPlugin, AppContext } from '@tsdiapi/server';
import { SyncQueueProvider } from './provider.cjs';

declare class App implements AppPlugin {
    name: string;
    context: AppContext;
    provider: typeof SyncQueueProvider;
}
declare function createPlugin(): App;
declare const getSyncQueueProvider: () => typeof SyncQueueProvider;

export { SyncQueueProvider, createPlugin as default, getSyncQueueProvider };
