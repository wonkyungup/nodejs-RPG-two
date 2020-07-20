//const { app, BrowserWindow } = require('electron'); 
const http = require('http');
const WebSocket = require('./socket/socket');

//const electronServer = () =>{
//    let win = new BrowserWindow({
//        width: 800,
//        height: 600,
//        webPreferences: true
//    });
//    win.loadFile('./client/client.html');
//};

//app.on('ready', electronServer);

const server = http.createServer((req,res)=>{
    console.log(new Date()+ 'received request for' + Request.url);
    res.writeHead(404);
    res.end();
});

const port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log(new Date()+ ' Server is running ...', port);
})

WebSocket(server);
