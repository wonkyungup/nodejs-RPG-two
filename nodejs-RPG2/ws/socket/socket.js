const ws = require('ws');
const wss = new ws.Server({ port : 55555 });

module.exports = (server) =>{
    wss.on('connection', (ws,req)=>{
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('new Client',ip);
    
        ws.on('message',(message)=>{
            console.log("Client Input: "+ message);
            ws.send(message);
        });
        ws.on('error',(error)=>{
            console.error(error);
        });
        ws.on('close',()=>{
            console.log('close');
    });
  });        
};
