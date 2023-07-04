// Média de valores pares : Crie um programa que solicite ao usuário uma lista de números separados por vírgula. Armazene esses números em um array e calcule a média apenas dos valores pares presentes no array. Exiba o resultado.



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a sequencia de números separadaos por vírgula: ', (numeros) => {
    let arrayNumeros = numeros.split(',').map(Number);

    let par = i => i % 2 === 0
    let numerosPares = arrayNumeros.filter(par);

    let soma = 0;
    for (let i = 0; i < numerosPares.length; i++) {
      soma += numerosPares[i];
    }
    
    let media = soma / numerosPares.length;
    
    console.log(`Lista recebida pelo usuário: ${arrayNumeros}`);
    console.log(`Lista de números pares: ${numerosPares}`);
    console.log(`A média entre os números pares é igual a: ${media}`);
    
    rl.close();    
});


