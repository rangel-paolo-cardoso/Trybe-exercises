const inquirer = require('inquirer');

function validateEntry (input) {
  return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
}

function resultIMC (imc) {
  if (imc < 17) return 'Muito abaixo do peso';
  if (imc >= 17 && imc < 18.5) return 'Abaixo do peso (magreza)';
  if (imc >= 18.5 && imc < 25) return 'Peso normal';
  if (imc >= 25 && imc < 30) return 'Acima do peso (sobrepeso)';
  if (imc >= 30 && imc < 35) return 'Obesidade I';
  if (imc >= 35 && imc < 40) return 'Obesidade II (severa)';
  return 'Obesidade III e IV (mórbida)';
}

async function calculaIMC () {
  const respostas = await inquirer.prompt([
    {
      name: 'peso',
      type: 'input',
      message: 'Digite seu peso (Kg)? ',
      validate: validateEntry
    },
    {
      name: 'altura',
      type: 'input',
      message: 'Digite sua altura (m)? ',
      validate: validateEntry
    }
  ]);

  const peso = parseFloat(respostas.peso);
  const altura = parseFloat(respostas.altura);

  const imc = peso / Math.pow(altura, 2);

  console.log('Seu peso: %f', peso);
  console.log('Sua altura: %f', altura);
  console.log('Seu IMC é: %s', imc.toFixed(2));
  console.log(resultIMC(imc));
  return;
}

module.exports = calculaIMC;
