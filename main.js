const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile ("src/pages/index.html")
}

function conexaoComBanco(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'electron_db'
    })
}

app.whenReady().then(() => {
  createWindow()
})