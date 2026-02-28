const { BrowserWindow, app, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/favicon.ico'),
    webPreferences: {
      nodeIntegration: true,
    }
  });
  win.loadFile('index.html');

  Menu.setApplicationMenu(null);
}
app.whenReady().then(createWindow);