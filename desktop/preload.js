const { contextBridge } = require('electron');

// Expose a minimal API to the renderer if needed in the future.
// Ketcher standalone mode runs entirely in the browser context,
// so no Node.js APIs are required.
contextBridge.exposeInMainWorld('desktopApp', {
  platform: process.platform,
  isDesktop: true,
});
