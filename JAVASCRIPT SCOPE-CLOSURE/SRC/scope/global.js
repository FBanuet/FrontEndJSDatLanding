
//var es una Variable GLOBAL y se Puede Reasignar
//let y const tambien se pueden usar como variables GLOBALES ESTÁTICAS

//NO SE PUEDEN REASIGNAR 
//let es otra Variable no Cambiable
//const es una variable constante

var hello = 'Hello';
var hello = "Hello +";

let world = 'Hello World';


const helloWorld = 'Hello World!';

//ARROW FUNCTION = () =>{}
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();


//UNA MALA PRÁCTICA PERO UTIL ES GENERAR UNA VARIABLE GLOBAL DENTRO DE UNA ARROW FUNCTION O FUNCIÓN
//Y LLAMARLA POSTERIORMENTE ESTE EJEMPLO A CONTINUACIÓN ES ESO

const helloworld = () =>{
    globalvar = "jajajajajajaj";
}


helloworld();

console.log(globalvar);

const anotherfunction = () =>{
    var localVar = globalvar = "Im Global";
}


anotherfunction();
console.log(globalvar);