//implementación de mysql

const http = require('http');
const mysql = require('mysql');
var io = require('socket.io')(http);

const con = mysql.createConnection({
    host: "localhost",
    //puerto no hace falta
    user: "root",
    password:""
   
})

//para seleccionar una tabla y hacer consultas

const server = http.createServer((req,res)=>{
    con.query("SELECT * FROM alumnos",(err,result,fields)=>{
        if(err){
            res.writeHead(400,{"content-type": "text/plain"})
            res.end("Error")
        }
    })
    console.log(fields)
    console.table(results)

})

//para levantar la coenxion entre servidor y base de datos. levanto el servidor solo si la base de datos se conecto bien.
con.connect(err=>{
    if(err){
        console.log(err)
    }
    console.log('se conecto la DB');
    server.listen(8000,()=>{
        console.log('se levanto el web server');
    })
});

//COMO IMPLEMENTAR WEB SOCKETS


