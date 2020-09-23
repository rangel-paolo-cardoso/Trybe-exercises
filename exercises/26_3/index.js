const fs = require('fs');

const inicioTest = Date.now();
const teste = fs.readFileSync('./teste.txt');

const tempoGasto = Date.now() - inicioTest; // Diferença entre horários.

console.log(teste.toString('utf8')); // exebe o conteúdo do arquivo.
console.log(`teste.txt: lidos ${teste.byteLength} bytes`); // exibe tamanho em bytes.
console.log(`Tempo gasto na execução: ${tempoGasto} segundos.`); // Tempo gasto.