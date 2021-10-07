//BLOCK SCOPE
////VARIABLES GLOBALES DENTRO DE UNA FUNCIÒN Y DENTRO BLOQUES DE CODIGO(IDENTACIÒNES IF ELSE O FOR LOOPS)
//SOLO CON VAR SE PODRA ACCEDER DE MANDERA GLOBAL O FUNCIONARA COMO GLOBAL DENTRO DE UN BLOQUE DE CODIGO LET Y CONST NARIZ


const frutas = () => {
    if(true){
        //variable VAR GLOBAL
        var frutas1 = "manzanas";

        //variables locales
        let frutas2 = "bananas";
        const frutas3  = "kiwi";


        console.log(frutas2);
        console.log(frutas3);
    }

    console.log(frutas1);

}

frutas();


//solucion para que LET funcione como variable global implicita a sufrir cambios dentro de un bloque de codigo

let x = 1;
{
    let x = 2;
    console.log(x);
}

console.log(x);


const anotherFunction = () => 
{
    for(let i = 0; i<10; i++)
    {
        setTimeout(() => {
            console.log(i);

        },5000)
    }
};

anotherFunction();