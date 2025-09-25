export class SyncQueueProvider {
    private static tasks: Set<Promise<any>> = new Set();
    private static isResolving = false;

    /**
     * Adds an asynchronous task to the queue.
     */
    public static addTask(task: Promise<any>) {
        this.tasks.add(task);

        // Remove the completed task to avoid memory leaks
        task.finally(() => this.tasks.delete(task));
    }

    /**
     * Waits for all registered tasks to complete.
     * @param timeoutMs Maximum wait time (default is infinite).
     * @throws {Error} If the wait time is exceeded.
     */
    public static async resolveAll(timeoutMs?: number): Promise<void> {
        if (this.isResolving) {
            throw new Error("AsyncResolver is already resolving tasks.");
        }

        this.isResolving = true;

        try {
            if (this.tasks.size === 0) {
                return;
            }
            if (timeoutMs) {
                // Apply timeout
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
    public static clear() {
        this.tasks.clear();
    }
}