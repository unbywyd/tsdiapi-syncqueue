# **syncqueue Plugin for TSDIAPI**

A **core plugin** for TSDIAPI that ensures all asynchronous tasks are completed before the server starts.

---

## 📌 About

The **syncqueue** plugin is an integral part of **TSDIAPI**, designed to handle **synchronous execution of asynchronous tasks** before the server initialization. It ensures that **all required async operations (such as database connections, dynamic module loading, etc.)** are completed before the API starts handling requests.

This plugin is **built into TSDIAPI** and does **not require manual installation or configuration**.

---

## 🚀 Purpose

- **Ensures all async tasks complete before the server starts.**  
- **Automatically integrated into TSDIAPI’s lifecycle.**  
- **Provides a global queue for async initialization tasks.**  

This plugin is used **internally by TSDIAPI**, and you don’t need to manually include or configure it.

---

## 🔧 How It Works

- **Before the server starts**, `syncqueue` waits for all registered asynchronous tasks to complete.  
- Developers can push async tasks into the queue via `SyncQueueProvider.addTask()`.  
- Once all tasks resolve, the server initialization continues.  

### Example:
```typescript
import { getSyncQueueProvider } from "@tsdiapi/syncqueue";

const syncQueue = getSyncQueueProvider();
syncQueue.addTask(someAsyncFunction()); // Ensures this completes before server starts
```

---

## 📌 Integration in TSDIAPI

- The **syncqueue** plugin is **automatically included in the TSDIAPI core**.  
- It does **not require installation** or manual registration.  
- It operates in the background as part of the server lifecycle.  

You do **not** need to install or register it manually:

❌ **No need to do this:**  
```typescript
import createPlugin from "@tsdiapi/syncqueue"; // ❌ Not needed!
createApp({ plugins: [createPlugin()] }); // ❌ Not needed!
```

---

## 🔗 Related Plugins

TSDIAPI supports modular extensions through plugins. Explore more at:  
🔗 [Available Plugins](https://www.npmjs.com/search?q=%40tsdiapi)

---

## 👨‍💻 Contributing

Since **syncqueue** is a core part of TSDIAPI, contributions should be made directly to the **TSDIAPI repository**.  

**Author:** unbywyd  

📧 **Contact:** unbywyd@gmail.com  

🚀 **Built into TSDIAPI for seamless async task handling!** 🎉