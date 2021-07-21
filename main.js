const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = require('electron');

const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, './src/preload.js'),
        }
    })

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `./dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    )
    mainWindow.on('closed', function () {
        mainWindow = null
    })

    mainWindow.webContents.openDevTools()
}

function createMenu() {
    let menu = Menu.buildFromTemplate([
        {
            label: '文件',
            submenu: [
                {
                    label: '主文件',
                    click() {
                        mainWindow.webContents.send('goToLogin')
                    }
                },
                {
                    label: '用户词库',
                    click() {
                    }
                },
            ]
        }
    ])
    Menu.setApplicationMenu(menu)
}

console.log(app);
app.on('ready', ()=>{
    createWindow()
    createMenu()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})

ipcMain.on('read-file', event => {
    console.log(event)
})
