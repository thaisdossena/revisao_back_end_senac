// Exercício 8 - Desenvolva um programa que peça ao usuário um número e verifique se esse número é positivo, negativo ou zero. Exiba uma mensagem correspondente.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
    numero = Number(numero);
    if ( numero === 0 ) {
        console.log('O número é igual a zero')
    } else if ( numero < 0 ) {
        console.log('O número é negativo')
    } else if ( numero > 0 ) {
        console.log('O número é positivo')
    } else {
        console.log('O número digitado é invalido')
    };
    rl.close();
}
);