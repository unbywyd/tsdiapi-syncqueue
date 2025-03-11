declare class SyncQueueProvider {
    private static tasks;
    private static isResolving;
    /**
     * Adds an asynchronous task to the queue.
     */
    static addTask(task: Promise<any>): void;
    /**
     * Waits for all registered tasks to complete.
     * @param timeoutMs Maximum wait time (default is infinite).
     * @throws {Error} If the wait time is exceeded.
     */
    static resolveAll(timeoutMs?: number): Promise<void>;
    /**
     * Clears the list of tasks (used in tests or to reset the state).
     */
    static clear(): void;
}

export { SyncQueueProvider };
