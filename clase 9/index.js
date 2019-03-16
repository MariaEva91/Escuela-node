const mysql = require('mysql');
const io = require('socket.io');
const http = require('http');

//SOCKET.IO

//io = representa todos los sockets conectados al mismo servidor de Sockets
//socket = representa al cliente que tenes conectado unico al servidor en ese momento.

io.on("connection",socket =>{
    //Emit(evento String, data any objeto)
    io.emit("enviar mensaje",{msj :"se ha conectado un nuevo usuario"})
    socket.emit("")
    socket.on("recibir mensaje",data=>{
        //guardar data en la base de datos
        //se lo emito a todos los sockets
        io.emit("mandar mensaje a todos",data)
    })
});
//le abro un puerto
io.listen(9000);



//socket.io-client : Es el paquete de npm para webSockets de clientes
//Se puede usar CDN para esto

const connection = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user:"root", //el preconfigurado es root y no tiene contrasenia
    database:"test"
})

//Desde la variable que mantiene la conexion sale siempre un metodo llamado query que es la que permite 
//ejecutar asincronicamente cada consulta a la BD.

connection.query(consulta String);

connection.query("SELECT * FROM alumnos WHERE id =?",[1],(err,res)=>{

});

//para cerrar la conexion

connection.close();


const server = http.createServer((req,res)=>{

})
server.listen(8000);

//En el cliente lo conecto asi:

