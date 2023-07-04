// Atividade 6: Lista de compras: Crie um programa que solicite ao usuário uma lista de compras, permitindo que ele digite vários itens separados por vírgula. Em seguida, exiba a lista de compras digitada pelo usuário.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite a lista de compras separadas por vírgula: ', (listaCompras) => {
    const lista = listaCompras.split(',');
    console.log('Lista de compras:');
    
    lista.forEach(item => {
      console.log(item.trim());
    });
  
    rl.close();
});