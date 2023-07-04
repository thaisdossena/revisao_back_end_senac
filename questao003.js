 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor a ser convertido: ', (real) => {
    const taxa = 0.21;
    const dolar = 4.81;

    const cambio = real / dolar - taxa;
    console.log('O valor em dólar é igual a: ', cambio.toFixed(2));
    rl.close();
});