const net = require('net');
//creo el servidor
let sockets =[]

const servidor = net.createServer(socket =>{
//cierro el servidor
socket.push(socket)
socket.write("Estableciendo conexion...\n\r")
socket.write("Bienvenido\n\r");
socket.on("data", data =>{
    socket.write(data)
    for(let index = 0; index < sockets.length;index++){
        const s = sockets[index]
        s.write(data)
    }
})
socket.end("Hola mundo");
})

//levanto el servidor
servidor.listen(8000);

