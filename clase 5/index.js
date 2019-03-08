/*function ajx(params){

};

ajax({
    metodo: "GET",
    url: "url1",
    success: function (data){

    }
})*/

/*let url = "https://jsonplaceholder.typicode.com/"

fetch(`${url}users`)
    .then(data => console.log(data))
    .catch(error => console.error(error));
//---------------------------------------------------

let usuarios = fetch(`${url}users`)

usuarios
    .then(data => data.json())
    .then(data => fetch(`${url}posts?userId=${data[6].id}`))
    .then(data => data.json())
    .then(data => Promise.all(data.map(post => fetch(`${url}comments?postId=${post.id}`))))
    .then(data => Promise.all(data.map(comment => comment.json())))
    .then(data => console.log(data))
    .catch(err => console.error(err))

//Para imagenes, archivos de audio o video
//usar no .json() , sino hacer data.blob()

//ASYNC/AWAIT

//async va afuera y await va diretcamente en la primera funcion adentro
async function obtenerComentarios() {
    //aca dentor va el codigo asincronico: el fetch
    // le pido directamente a mi variable que me espere. y se cuando responde la info ya esta en esa variable
    let usuarios_response = await fetch(`${url}users`)
    let usuarios = await usuarios_response.json()
    let posts_response = await fetch(`${url}posts?userId=${usuarios[6].id}`)
    let posts = await posts_response.json()


    let comments_user = await Promise.all(posts.map(
        async post => {
            let fetch_comment = await
                fetch(`${url}comments?postId=${post.id}`)
            let comment = await fetch_comment.json()
            return comment
        }))


    console.log(comments_user)


    console.log(posts)
    console.log(usuarios)
}

obtenerComentarios()*/

//----------------NODE.JS----------------------------------
//para llamar a un modulo

/*require("nombreDelModulo");

//para exportar info del modulo

exports // es un link simbolico local de mi modulo a module.exports
module.exports ={a:1}
module.exports.a = 1*/

//EVENT EMITTER
//son sincronicos, hay que hacerlos asincronicos

const events = require("events")
let { EventEmitter } = events;

let mi_variable = new EventEmitter()
mi_variable.on("click",()=>{
    setImmediate(()=>{console.log("me hicieron click")})
    
})

mi_variable.emit("click")
console.log("segundo")