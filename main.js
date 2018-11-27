const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1165, height: 750, titleBarStyle: 'hidden', 'minHeight': 300, 'minWidth': 615})

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})
