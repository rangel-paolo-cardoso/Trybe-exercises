const fs = require('fs');
const path = require('path');
const readLine = require('readline');

const leitura = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

function leArquivo () {
  leitura.question('Que arquivo você deseja ver? ', (answer) => {
    fs.readFile(path.resolve(__dirname, answer), (err, file) => {
      if (err) {
        return console.log(`Erro ao ler arquivo: ${err.message}`);
      }
      console.log(file.toString('utf8'));
      console.log('-------------------');
      console.log(`Arquivo de ${file.byteLength} bytes`);

      leitura.close();
    });
  });
}

module.exports = leArquivo;
