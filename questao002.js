// Atividade 2: Calculadora de IMC (Índice de Massa Corporal): Crie um programa que solicite ao usuário o seu peso (em kg) e a sua altura (em metros) e calcule o seu IMC. Exiba uma mensagem com o resultado, indicando se o usuário está abaixo do peso, no peso ideal ou acima do peso.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu peso em quilos:', (peso) => {
    rl.question('Digite sua altura em metros:', (altura) => {
        peso = Number(peso);
        altura = Number(altura);

        let indice = peso / (altura * altura);

        console.log(peso, altura, indice.toFixed(2));

            if ( indice < 18.5) {
                console.log('Você está abaixo do peso, seu IMC é: ',indice.toFixed(2));
            } else if ( indice > 18.6 && indice < 24.9 ) {
                console.log('Você está no peso ideal, seu IMC é:', indice.toFixed(2));
            } else if ( indice > 25 && indice < 29.9) {
                console.log('Você está acima do peso, seu IMC é:', indice.toFixed(2));
            }
            
        rl.close();
    });
});