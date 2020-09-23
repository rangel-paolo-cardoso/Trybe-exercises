const fs = require('fs');

const inicioTest = Date.now();
const teste = fs.readFileSync('./teste.txt');

function leArquivoDeFormaSincrona () {
  console.log(teste.toString('utf8')); // exebe o conteúdo do arquivo.
  const tempoGasto = Date.now() - inicioTest; // Diferença entre horários.
  console.log(`teste.txt: lidos ${teste.byteLength} bytes`); // exibe tamanho em bytes.
  console.log(`Tempo gasto na execução: ${parseInt(tempoGasto / 1000, 10)} segundos.`); // Tempo gasto.
  return;
}

module.exports = leArquivoDeFormaSincrona;
