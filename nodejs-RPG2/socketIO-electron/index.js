const {app, BrowserWindow} = require('electron')
const path = require('path');
const appExpress = require('express')();
const server = require('http').createServer(appExpress);

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: true
  })
  mainWindow.loadFile(path.join(__dirname)+'/views/index.html');
}

app.on('ready', createWindow);

appExpress.use('/',(req,res)=>{
  res.sendFile(path.join(__dirname)+'/views/index.html');
});

const port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log(new Date() +'Server is running..',port);
});

const webScoket = require('./socket/socket');
webScoket(server);