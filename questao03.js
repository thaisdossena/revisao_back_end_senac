// Maior e menor valor: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. Armazene esses números em um array e determine o maior e o menor valor presente no array. Exiba os resultado:

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a sequencia de números separadaos por vírgula: ', (numeros) => {
    let arrayNumeros = numeros.split(",").map(Number);    

    let maiorElemento = Math.max.apply(null, arrayNumeros);
    let menorElemento= Math.min.apply(null, arrayNumeros);

    console.log(`Maior elemento: ${maiorElemento}. Menor elemento: ${menorElemento}`);

    rl.close();
});

