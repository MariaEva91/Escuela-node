const http = require('http');
const Url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
    //esto: para saber el metodo, la url que estoy usando. IMPORTANTE PARA HACER UN ROUTER
    let { httpVersion, method, url } = req;
    console.log(`HTTP${httpVersion}- ${method}- ${url}`);
// desde la url le mande
//fetch("http://localhost:8000?nombre=horacio")

//para levantar info de la url

   let parsed_url = Url.parse(url,true)
   let {nombre} = parsed_url.query;
   console.log(nombre);

    //creo un evento para recibir la info que mande por ajax
    let buffer = [];
    let buffer_end
    req.on('data', chunck => {
        buffer.push(chunck)
    })

    //para saber cuando termine de recibir info
    req.on('end', () => {
        buffer_end = Buffer.concat(buffer);
        buffer =[];
        console.log(buffer_end.toString())
        
    })

    let archivo = fs.createReadStream(__dirname+"index.html")
    res.writeHead(200,{'content-type': 'text/html'})
    archivo.pipe(res)

    res.end('Hola mundo!')

})

server.listen(8000, () => {
    console.log('Servidor Encendido')
})

//Desde el cliente: le pase esta info:

/*fetch("http://localhost:8000",{
    method: "POST",
    headers:{
        "content-type": "application:json",
    },
    body: JSON.stringify({x:1})
})*/

//Local storage

//localStorage.getItem('nombre','horacio');


