const fs = require('fs');
const { question } = require('readline-sync');

const arquivo1 = question('Qual o nome do arquivo que deseja ler? (exemplo: exemplo.txt) ');
const arquivo2 = question('Qual o segundo nome de arquivo que deseja ler? (exemplo: exemplo.txt) ');

const inicioDoPrimeiro = Date.now();

fs.readFile(`./${arquivo1}`, 'utf8', (err, file1) => {
  if (err) {
    throw err;
  }
  const tempoGasto = Date.now() - inicioDoPrimeiro;
  console.log('\nArquivo 1');
  console.log(`teste2.txt: lidos ${file1.length} bytes`);
  console.log(`Tempo gasto na execução: ${tempoGasto} milisegundos.`);
});

const inicioDoSegundo = Date.now();

fs.readFile(`./${arquivo2}`, 'utf8', (err, file2) => {
  if (err) {
    throw err;
  }
  const tempoGasto = Date.now() - inicioDoSegundo;
  console.log('\nArquivo 2');
  console.log(`teste3.txt: lidos ${file2.length} bytes`);
  console.log(`Tempo gasto na execução: ${tempoGasto} milisegundos.`);
});
