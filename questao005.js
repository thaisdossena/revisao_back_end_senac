// Atividade 5: Cálculo de média ponderada: Crie um programa que solicite ao usuário as notas de três provas e seus respectivos pesos. Calcule a média ponderada dessas provas e exiba o resultado.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question ('Nota da primeira avaliação: ', (nota1) => {
    rl.question ('Peso da primeira avaliação: ', (peso1) => {
        rl.question('Nota da segunda avaliação: ', (nota2) => {
            rl.question('Peso da segunda avaliação: ', (peso2) => {
                rl.question('Nota da terceira avaliação: ', (nota3) => {
                    rl.question('Peso da terceira avaliação: ', (peso3) => {     
                        
                        const mediaPonderada = (+nota1 * +peso1 + +nota2 * +peso2 + +nota3 * +peso3) / (+peso1 + +peso2 + +peso3);

                        console.log('Media: ', mediaPonderada.toFixed(2));

                        rl.close();

                    });
                });
            });
        });
    });
});