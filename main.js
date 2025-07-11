const electron = require('electron')

electron.app.on("ready", () => {
	let browserWindow = new electron.BrowserWindow({
		show: true,
		x: 500,
	});

	browserWindow.webContents.loadURL("https://webglsamples.org/blob/blob.html");
});