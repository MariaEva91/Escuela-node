const net = require('net');
const hostname = '127.0.0.1';
const fs = require('fs');

const port = 3000;

let sockets = []

const server = net.createServer(socket => {

    let { localAddress, localPort, remoteAdress, remotePort } = socket;
    console.log(socket.localAddress, socket.localPort)
    //establecer un nombre aleatorio a cada socket
    //math.floor : redondea para abajo
    //math.ceil: redondea para arriba
    //number.toFixed() : redondea y corta con la cantidad de decimales que vos le decis que queres

    socket.id = `Socket-${Math.floor(Math.random() * 1000)}`;
    sockets.push(socket);
    //mostrar mensaje para todos los sockets cada vez que alguien se conecte
    if (sockets.length) {
        sockets.forEach(s => {
            s.write('se ha conectado alguien')
        })
    }
    let buffer = [];
    socket.on("data", data => {
        buffer.push(data)
        if (data == 'enter') {
            buffer = Buffer.concat(buffer)
            //acordarse de usar la linea 28 en otra variable o restaurar el valor original de la variable  buffer 
            //en array vacio, de lo contrario, el proximo ingreso de data falla ya que la variable no es mas un array sino un buffer
        }
    })

})

server.listen(3000);

//Consigna para ejercicio
//--Identificar el evento de desconexion del socket y enviar un mensaje a todos los sockets
//notificando la desconexión.
//--Eliminar el socket del array de sockets a notificar de lo contrario nos dara error en los próximos mensajes
//--

