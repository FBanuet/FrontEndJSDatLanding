const anotherFunction = () => 
{
    for(let i = 0; i < 10; i ++)
    {
        setTimeout(() => {
            console.log(i);

        },5000)
    }
};

anotherFunction();

let lista = [1,2,3,4,5,6,7];

const anotherDumb = (ls) =>{
    for (let num in ls) {
        console.log(num + "SOY UN NUMERO NUEVO");
    };
};


anotherDumb(lista);






