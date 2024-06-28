const { app, BrowserWindow } = require('electron')
const path = require ('path')
const pool = require('./src/db/db'); 


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }


//probrar mi conexion a la base de datos
  async function testDatabaseConnection() {
    try {
      await pool.query('SELECT 1');
      console.log('Conexion a la base de datos exitosa');
    } catch (err) {
      console.error(`Error al conectar a la base de datos: ${err.message}`);
    }
  }




  app.whenReady().then(() => {
    createWindow()
    testDatabaseConnection()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })