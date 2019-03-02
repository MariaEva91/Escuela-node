//funcion variadica

function foo(a,b){
    //var a = 1;
    // var b= 2;
    a = 10
    arguments[1] = 20;
    var copia = Array.prototype.slice.call(arguments, 0);
    console.log(b)
    console.log(arguments)
}

foo(1,2)

//Events loops

setTimeout(function(){
    for(var i = 0; i< 100000000000; i++){
    }
},100)

setTimeout(function(){
console.log('segundo')
},200)

//Node------------------------------------------------------------------------------------
//patron de modulo. Todo lo que hay adentro es el modulo

(function(b){

})(10)

//------------PROMESAS-------------

let promise = new Promise(function(bien, mal){

    bien(1);
    mal(Error("error"));
})

promise.then(res =>{}).catch(err =>{});

//------------------

