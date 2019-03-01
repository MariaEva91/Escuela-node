let a = {}
a.toString();


//es lo mismo que decir window.Persona = function Persona(){};
function Persona() {
    console.log(this)
}

Persona();//window{};

function ctx(a, b) {
    console.log("Parametros:", a, b);
    console.log("Contexto:", this);
    console.log("**********");
}

ctx(1, 2); //1 2 window
//EJECUTAN LA FUNCION EN AL LINEA EN LA QUE APARECE
//con esta función le cambio el contexto, fuerzo el valor de this-
ctx.call({ ctx: "call" }, 10, 20); //asi es como llamar una función sin parametros, y me da undefined
//10 20 contexto: "call" . Yo estoy forzando el valor de THIS

ctx.apply({ ctx: "apply" }, [100, 200]); //la diferencia es que acá los parametros se pasan en un array.
//tambien en el contexto le voy a decir lo que quiero que valga THIS. 

//NO LA EJECUTA, LA DEJA EN STAND BY PARA CUANDO YO LA QUIERA EJECUTAR. Tiene retorno, el retorno es la ejecución de la función. 
//Le paso parametros a una funcion, pero no la ejecuto en el momento. Por ejemplo para las callbacks
ctx.bind({ ctx: "bind" }, 1000, 2000);
//NEW: Ejecuta la funcion que tiene al lado reasignandole el contexto con un objeto vacio. Al finalziar la ejecución de la función, retorna ese objeto que creo.

new ctx; //es igual a
/*let a ={} 
 ctx.call(a) 
 return a */


//Como le digo a THIS lo q quierop que valga. 4 FORMAS DISTINTAS DE EJECUTAR UNAFUNCION EN JAVASCRIPT.

//FUNCTION.CALL()
//FUNCTION.APPLY()
//FUNCTION.BIND()
//new FUNCTION

//CLOSURE

function externa(x) {
    console.log(x);
    //esto es el closure //el valor de x dejo de existir, pero pasa como referencia porque se guardo en el closure
    return function interna(y) {
        console.log(y + x)
    }
    //closure
}

let retorno = externa(10);
retorno(20);