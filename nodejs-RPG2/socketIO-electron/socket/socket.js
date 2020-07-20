
module.exports = server =>{
    const socket = require('socket.io');
    const io = socket.listen(server);
    io.on('connect',(socket)=>{
        console.log('Client conection!');

        socket.on('disconnect', (socket)=>{
            console.log('Client disconnetion', socket);
        });

        socket.on('error',(socket)=>{
            console.error(socket);
            socket.on('reconnection',()=>{
                console.log('reconnectioning ...');
            });
        });

        socket.on('message', (msg)=>{
            console.log("Client meassge: "+ msg)
            socket.emit('message', msg);
        });
    });
}