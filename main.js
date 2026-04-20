const { app, BrowserWindow } = require('electron')

app.on('ready', async () => {
	const win = new BrowserWindow({ show: true })
	win.webContents.loadURL('https://webglsamples.org/blob/blob.html')
})