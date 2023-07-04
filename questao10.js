// Exercício 10 - Crie um programa que solicite ao usuário uma quantidade de horas e calcule o equivalente em minutos e segundos. Exiba os resultados.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question('Digite uma quantidade de horas a ser convertida:', (horas) => {
    horas = Number(horas);
    const minutos = horas * 60;
    const segundos = minutos * 60;
    console.log( horas, 'horas', minutos, 'minutos', segundos, 'segundos.')
    rl.close();
});