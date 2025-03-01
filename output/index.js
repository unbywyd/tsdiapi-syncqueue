"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSyncQueueProvider = exports.SyncQueueProvider = void 0;
exports.default = createPlugin;
require("reflect-metadata");
const provider_1 = require("./provider");
var provider_2 = require("./provider");
Object.defineProperty(exports, "SyncQueueProvider", { enumerable: true, get: function () { return provider_2.SyncQueueProvider; } });
class App {
    name = 'syncqueue';
    context;
    provider = provider_1.SyncQueueProvider;
}
function createPlugin() {
    return new App();
}
const getSyncQueueProvider = () => provider_1.SyncQueueProvider;
exports.getSyncQueueProvider = getSyncQueueProvider;
//# sourceMappingURL=index.js.map