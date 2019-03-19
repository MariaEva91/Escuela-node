//opcion sin express
const http = require('http');
const servidor = require('http').createServer(handler);
var io = require('socket.io')(servidor);
const fs = require('fs');
//si lo hago con express agrego
//const app = require('express')();
//const servidor = require('http').Server(app);
//EL SERVIDOR QUE USAR SOCKET DEBERIA SER EL DE HTTP, NO EL QUE VIENE CON EXPRESS

function handler(req,res){
    let archivo = fs.createReadStream(__dirname+"app.ws.html")
    res.writeHead(200,{"content-type":"text/html"})
    archivo.pipe(res)
}

io.on("connection",socket=>{
    socket.emit("nueva_con",{status:"ok",payload:"Te conectaste!"})
});

servidor.listen(8000);