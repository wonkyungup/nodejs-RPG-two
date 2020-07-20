const path = require('path');
const app = require('express')();
const server = require('http').createServer(app);

app.use('/',(req,res)=>{
  res.sendFile(path.join(__dirname)+"/views/index.html");
});

const port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log(new Date() +'Server is running..',port);
});

const webScoket = require('./socket/socket');
webScoket(server);