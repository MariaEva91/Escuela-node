const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req,res)=>{
    //es indispensable que una conexion http termine la escritura del socket con Socket.end
  //  res.write('Hola');
   // res.write('Mundo');
    
    //header de content-type
   // res.statusCode = 200
   // res.setHeader('Content-Type', 'text/html');
   //res.end(`<h1> hola mari!</h1>`)
    //forma indirecta de setear el header
    //por defecto el codigo de status de http en node es siempre 200 hasta que el digamos lo contrario.

    //Para mandar un archivo HTML completo, importo el modulo fs
    fs.readFile(`${__dirname}/index.html`,(err,data)=>{
        if(err){
            console.log(err)
            res.writeHead(500,'Internal Server Error')
            res.end(err.message)
        }else{
            res.writeHead(200,{'content-type':'text/html'})
            res.end(data)
        }
       
    })
    
});
servidor.listen(8000);