const leEntrada = require('readline-sync');

// function resultIMC (imc) {
//   switch (imc) {
//     case (imc < 17):
//       return 'Muito abaixo do peso';
//     case (imc >= 17 && imc < 18.5):
//       return 'Abaixo do peso';
//     case (imc >= 18.5 && imc < 25):
//       return 'Peso normal';
//     case (imc >= 25 && imc < 30):
//       return 'Acima do peso';
//     case (imc >= 30 && imc < 35):
//       return 'Obesidade I';
//     case (imc >= 35 && imc < 40):
//       return 'Obesidade II (severa)';
//     default:
//       return 'Obesidade III (mórbida)';
//   }
// }

function calculaIMC () {
  const peso = leEntrada.questionFloat('Digite seu peso (Kg) ');
  const altura = leEntrada.questionFloat('Digite sua altura (Cm) ');
  const imc = peso / Math.pow(altura, 2);
  // return resultIMC(imc);
  return imc.toFixed(2);
}

console.log(calculaIMC());