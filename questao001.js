// Atividade 1: Verificação de idade para entrada em uma festa: Crie um programa que solicite ao usuário a sua idade e verifique se ele pode entrar em uma festa (idade mínima de 18 anos). Exiba uma mensagem informando se a entrada é permitida ou não.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual sua idade, por favor: ', (idade) => {
    idade = Number(idade);
    if ( idade < 18) {
        console.log('Entrada permitida apenas mediante a autorização de responsável!')
    } else if ( idade >= 18) {
        console.log('Boa festa!');    
    } else {
        console.log('Digite uma idade válida!');
    }
    rl.close();
});
