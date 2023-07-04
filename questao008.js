// Atividade 8: Calculadora de desconto : Crie um programa que solicite ao usuário o valor de um produto e a porcentagem de desconto a ser aplicada. Calcule o valor do desconto e exiba o valor final do produto com o desconto aplicado.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Valor do produto: ', (valor) => {
    rl.question('Porcentagem de desconto: ', (porcentagem) =>{
        let desconto = porcentagem / 100;
        let valorDescontado = valor * desconto;
        let valorComDesconto = valor - valorDescontado;

        console.log(`Valor original: ${valor}`);
        console.log(`Valor com ${porcentagem}% de desconto: ${valorComDesconto}`);

        rl.close();
    });
});