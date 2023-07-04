// Concatenação de arrays: Crie um programa que solicite ao usuário duas listas de números separadas por vírgula. Armazene esses números em dois arrays diferentes e concatene os dois arrays em um único array. Exiba o array resultante.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a sequencia de números separadaos por vírgula: ', (sequencia1) => {
    rl.question('Digite a sequencia de números separadaos por vírgula: ', (sequencia2) => {
        let arraySequencia1 = sequencia1.split(",").map(Number);
        let arraySequencia2 = sequencia2.split(",").map(Number);    
        
        let somaArrays = arraySequencia1.concat(arraySequencia2);
        somaArrays.sort();
        
        console.log(`Sequencias concatenadas: ${somaArrays}.`);

        rl.close();
    });   
});
