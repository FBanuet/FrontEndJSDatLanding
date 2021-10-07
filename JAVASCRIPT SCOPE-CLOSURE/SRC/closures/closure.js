const moneyBox = (coins) => {
    var saveCoins = 0;

    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//closure similar a Yield en Python o recursividad quiza

const moneyBOX = () =>
{
    var savecoins = 0;

    const contarmonedas = (coins) =>
    {
        savecoins += coins;
        console.log(`MoneyBox: $${savecoins}`);
    }

    return contarmonedas;
}

let myMoneyBox = moneyBOX ();

myMoneyBox(1);
myMoneyBox(1);
myMoneyBox(1);


