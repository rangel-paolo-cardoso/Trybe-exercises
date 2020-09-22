const inquirer = require('inquirer');

function validaFibonacci (input) {
  if (input <= 0) return 'Valor incorreto! Digite um número natural.';
  return !isNaN(parseInt(input)) || 'Erro! Digite um número.';
}

// function calcFibonacci (n) {
//   if (n === 1) return 1;
//   let prev = 1;
//   let seq = `${prev}`;
//   for (let number = 0; number < n - 1; number += 1) {
//     if (number <= 1) seq += `, ${prev + number}`;
//     else {
//       seq += `, ${prev + number}`;
//       prev += prev;
//     };
//   }
//   return seq;
// }

function calcFibonacci (n) {
  let first = 1;
  let second = 1;
  let seq = [first];
  if (n === 1) return 1;
  seq.push(second);
  if (n === 2) return seq.join(', ');
  for (let number = 0; number < n - 2; number += 1) {
    first = seq[0 + number];
    second = seq[1 + number];
    seq.push(first + second);
  }
  return seq.join(', ');
}

async function fibonacciSequence () {
  const n = await inquirer.prompt([{
    name: 'valor',
    type: 'input',
    message: 'Digite o número de elementos que você quer ',
    validate: validaFibonacci
  }]);

  const quantidade = parseInt(n.valor);
  console.log(calcFibonacci(quantidade));
  return;
}

module.exports = fibonacciSequence;
