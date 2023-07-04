//Escreva um programa em JavaScript que solicite ao usuário seu nome e exiba uma mensagem de boas-vindas personalizada. No terminal chamar a pasta node + nome do arquivo

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome, por favor: ', (nome) => {
    console.log('Olá, ', nome, 'seja bem-vindo(a)!');
    rl.close();
}
);
