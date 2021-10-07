const holaMundo = () =>{
    const hola = 'Hola Mundo!';
    console.log(hola);
};

holaMundo();


var scope = "SOY UN GLOBAL CON VAR";


const functionScope = () =>{
    var scope = "SOY SOLO UN LOCAL";
    const func = () =>{
        return scope
    }
    console.log(func());
};

functionScope();
console.log(scope);