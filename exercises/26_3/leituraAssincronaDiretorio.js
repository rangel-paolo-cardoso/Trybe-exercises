const fs = require('fs');
const { question } = require('readline-sync');

const path = question('Digite o caminho até a pasta: '); // caminha para a pasta
const inicioDoScript = Date.now();

let tamanhoTotalDeArquivos = 0; // Zero por enquanto.

fs.readdir(`${path}`, (err, minhaPasta) => {
  if (err) return err;
  console.log(`Quantidade de arquivos: ${minhaPasta.length}`);
  const fileSize = [];

  function finalizaScript () {
    if (fileSize.length === minhaPasta.length - 1) {
      tamanhoTotalDeArquivos = fileSize.reduce((res, num) => res + num, 0);
      console.log(`Tamanho total da Pasta: ${tamanhoTotalDeArquivos} bytes`);
      console.log(`Tempo de execução: ${Date.now() - inicioDoScript} milisegundos`);
    }
  }

  minhaPasta.forEach((nomeDoArquivo) => {
    if (nomeDoArquivo !== 'node_modules') {
      const arquivo = fs.readFile(`${path}/${nomeDoArquivo}`, (err, file) => {
        if (err) return err;
        fileSize.push(file.byteLength);
        finalizaScript();
      });
    }
  });
});