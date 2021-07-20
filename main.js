const {app, BrowserWindow, Menu} = require('electron');

const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `./dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
    mainWindow.on('closed', function () {
        mainWindow = null
    })
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