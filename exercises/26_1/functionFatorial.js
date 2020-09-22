const inquirer = require('inquirer');

function fatorial (n) {
  return n * (n <= 1 ? 1 : fatorial(n - 1));
}

function validaFatorial (input) {
  if (input < 0) return 'Digite um número inteiro positivo.';
  return !isNaN(parseInt(input)) || 'Entrada inválida! Isso não é um número.';
}

async function calcFatorial () {
  const num = await inquirer.prompt([
    {
      name: 'valor',
      type: 'input',
      message: 'Digite um número para calcular seu fatorial ',
      validate: validaFatorial
    }
  ]);

  const n = parseInt(num.valor, 10);

  console.log('O fatorial de '+ num.valor + ' é: ' + fatorial(n));
  return;
}

module.exports = calcFatorial;
