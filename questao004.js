// Atividade 4: Verificação de disponibilidade de produto em estoque: Crie um programa que solicite ao usuário a quantidade desejada de um determinado produto e verifique se há quantidade suficiente em estoque. Caso haja, exiba uma mensagem informando a disponibilidade; caso contrário, informe que o produto está indisponível.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Quantidade desejada do um produto: ', (quantidadeProduto) => {
    quantidadeProduto = Number(quantidadeProduto);
    let estoqueProduto = (parseInt(Math.random() * 100));
    let estoqueAposRetirada = ( estoqueProduto - quantidadeProduto);

    if ( quantidadeProduto > estoqueProduto) {
        console.log('Não há estoque suficiente do produto. Quantidade do produto em estoque: ', estoqueProduto);
    } else if (quantidadeProduto <= estoqueProduto) {
        console.log('Produto disponível. Quantidade do produto ainda em estoque: ', estoqueAposRetirada);
    }
    rl.close();

});