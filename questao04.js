// Remoção de elemento: Crie um programa que solicite ao usuário uma lista de nomes separados por vírgula. Armazene esses nomes em um array e peça ao usuário para digitar um nome a ser removido do array. Remova o nome digitado e exiba o array resultante.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma lista de nomes separados por vírgula: ', (listaDeNomes) => {
        const nomes = listaDeNomes.split(',');
        console.log(`Lista de nomes: ${nomes}`);

        rl.question('Digite um nome a ser removido: ', (removerNome) => {
            const index = nomes.indexOf(removerNome);
            if (index ==! -1) {
                nomes.splice(index, 1);
                console.log('Array resultante', nomes);
            } else {
                console.log('Nome inválido');
            }    
        rl.close();
    });
});