//node 
//FyleSystem

//const fs = require ("fs");

/*fs.readFile(__filename,(err,data)=>{
    console.log(data)
})
*/
//Inicia un stram en modo "pausado"
//Los streams pueden estar en dos modos : paused o flowings.
//Si yo empiezo un archivo por defecto va a estar pausado, y si le hago una accion va a empezar a fluir
//let archivo = fs.createReadStream(__dirname)
//let nuevo = fs.createWriteStream(__dirname+ "output.txt")
//como empezar a consumirlo: con el evento DATA. Este evento se dispara cuando nos llega un CHUNK a traves del STREAM 
//en forma de BUFFER

//TODOS LOS STREAMS DE TIPO READABLE TIENE EL EVENTO "DATA"
//TODOS LOS STREAMS DE TIPO WRITABLE IMPLEMENTAN EL METODO WRITE PARA ESCRIBIR POR STREAM. Y tiene un evento END.
/*archivo.on("data", chunk=>{
    console.log(`Nuevo chunk: ${chunk}`)
    nuevo.write(chunk)
})
//Todos los streams de tipo readable implementan el evento de tipo "end" y se dispara cuando ya no hay más info para leer
archivo.on("end",()=> {
nuevo.end()
})
console.log(archivo)

//PIPES// reemplaza todo el codigo anterior

archivo.pipe(nuevo)*/