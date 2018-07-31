import {app, BrowserWindow, BrowserWindowConstructorOptions, Menu} from 'electron';

import * as isDev from 'electron-is-dev';

import * as path from 'path';

import * as url from 'url';

let win: BrowserWindow | null;

function createWindow() {
	const option: BrowserWindowConstructorOptions = {
		width: 920,
		height: 750,
		minWidth: 930,
		minHeight: 500,
		backgroundColor: '#fff',
		frame: false,
		titleBarStyle: 'hidden',
	};

	win = new BrowserWindow(option);

	if (isDev) {
		win.loadURL('http://localhost:3000/');
	} else {
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

app.on('ready', () => {
	createWindow();
});

app.on('window-all-closed', () => {

});

app.on('activate', () => {
	if (win == null) {
		createWindow();
	}
});