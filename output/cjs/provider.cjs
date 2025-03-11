var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var provider_exports = {};
__export(provider_exports, {
  SyncQueueProvider: () => SyncQueueProvider
});
module.exports = __toCommonJS(provider_exports);
class SyncQueueProvider {
  static tasks = /* @__PURE__ */ new Set();
  static isResolving = false;
  /**
   * Adds an asynchronous task to the queue.
   */
  static addTask(task) {
    this.tasks.add(task);
    task.finally(() => this.tasks.delete(task));
  }
  /**
   * Waits for all registered tasks to complete.
   * @param timeoutMs Maximum wait time (default is infinite).
   * @throws {Error} If the wait time is exceeded.
   */
  static async resolveAll(timeoutMs) {
    if (this.isResolving) {
      throw new Error("AsyncResolver is already resolving tasks.");
    }
    this.isResolving = true;
    try {
      if (this.tasks.size === 0) {
        return;
      }
      if (timeoutMs) {
        await Promise.race([
          Promise.all(this.tasks),
          new Promise((_, reject) => setTimeout(() => reject(new Error(`Timeout: AsyncResolver exceeded ${timeoutMs}ms`)), timeoutMs))
        ]);
      } else {
        await Promise.all(this.tasks);
      }
    } finally {
      this.isResolving = false;
    }
  }
  /**
   * Clears the list of tasks (used in tests or to reset the state).
   */
  static clear() {
    this.tasks.clear();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SyncQueueProvider
});
