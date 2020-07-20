const {app, BrowserWindow} = require('electron')
const path = require('path')
const http = require('http');
const WebSocket = require('./socket/socket');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile(path.join(__dirname)+'/view/index.html');
}

app.on('ready', createWindow);

const server = http.createServer((req,res)=>{
    console.log(new Date()+ 'received request for' +req.url);
    res.writeHead(404);
    res.write('Web Scoket Test!');
    res.end();
});

const port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log(new Date()+ ' Server is running ...', port);
})

WebSocket(server);
