const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const login = "admin";
const senha = "admin";

rl.question('Digite o login: ', (login) => {
    rl.question('Digite a senha: ', (senha) => {
      if (login === login && senha === senha) {
        console.log('Login bem-sucedido!');
      } else {
        console.log('Login ou senha incorretos.');
      }
      rl.close();
    });
}) ;