"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const url = require("url");
let win;
function createWindow() {
    const option = {
        width: 920,
        height: 750,
        minWidth: 930,
        minHeight: 500,
        backgroundColor: '#fff',
        frame: false,
        titleBarStyle: 'hidden',
    };
    win = new electron_1.BrowserWindow(option);
    if (isDev) {
        win.loadURL('http://localhost:3000/');
    }
    else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, '../build/index.html'),
            protocol: 'file:',
            slashes: true,
        }));
    }
    win.on('closed', () => {
        win = null;
    });
}
electron_1.app.on('ready', () => {
    createWindow();
});
electron_1.app.on('window-all-closed', () => {
});
electron_1.app.on('activate', () => {
    if (win == null) {
        createWindow();
    }
});
//# sourceMappingURL=index.js.map