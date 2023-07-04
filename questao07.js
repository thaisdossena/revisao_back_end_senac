// Ordenação crescente: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. Armazene esses números em um array e ordene os elementos do array em ordem crescente. Exiba o array resultante.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a sequencia de números separadas por vírgula: ', (numeros) => {
    let arrayNumeros = numeros.split(",").map(Number);
    arrayNumeros.sort();

    console.log(`Lista em ordem crescente: ${arrayNumeros}.`);

    rl.close();
});