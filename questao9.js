// Exercicio 9 - Escreva um programa que solicite ao usuário três valores e determine o maior e o menor valor entre eles. Exiba os resultados.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (n1) => {
    rl.question('Digite o segundo número: ', (n2) => {
        rl.question('Digite o terceiro número: ', (n3) => {
            const maior = Math.max(n1, n2, n3);
            const menor = Math.min(n1, n2, n3);

            console.log('O maior valor é: ', maior);
            console.log('O menor valor é: ', menor);

            rl.close();
        });
    });
});