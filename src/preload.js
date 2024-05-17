const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getDeviceInfo: () => ipcRenderer.invoke('get-device-info')
});
