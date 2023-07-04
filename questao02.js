// Soma dos elementos : Crie um programa que solicite ao usuário uma lista de números separados por vírgula. Armazene esses números em um array e calcule a soma de todos os elementos do array. Exiba o resultado.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a sequencia de números separadaos por vírgula: ', (numeros) => {
    let arrayNumeros = numeros.split(",").map(Number);
    let somaElementos = 0;
    for(let i = 0; i < arrayNumeros.length; i++) {
        somaElementos += arrayNumeros[i];
    }

    console.log(`Soma elementos: ${somaElementos}.`);

    rl.close();
});
