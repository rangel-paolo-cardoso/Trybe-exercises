const leEntrada = require('readline-sync');

function resultIMC (imc) {
    if (imc < 17) return 'Muito abaixo do peso';
    if (imc >= 17 && imc < 18.5) return 'Abaixo do peso (magreza)';
    if (imc >= 18.5 && imc < 25) return 'Peso normal';
    if (imc >= 25 && imc < 30) return 'Acima do peso (sobrepeso)';
    if (imc >= 30 && imc < 35) return 'Obesidade I';
    if (imc >= 35 && imc < 40) return 'Obesidade II (severa)';
    return 'Obesidade III e IV (mórbida)';
}

function calculaIMC () {
  const peso = leEntrada.questionFloat('Digite seu peso (Kg) ');
  const altura = leEntrada.questionFloat('Digite sua altura (Cm) ');
  const imc = peso / Math.pow(altura, 2);
  console.log('Seu IMC é: %s', imc.toFixed(2));
  return resultIMC(imc);
}

console.log(calculaIMC());