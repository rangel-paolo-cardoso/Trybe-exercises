const fs = require('fs');
const { question } = require('readline-sync');

const path = question('Digite o caminho até a pasta: '); // caminha para a pasta
const inicioDoScript = Date.now();
const minhaPasta = fs.readdirSync(`${path}`); // pasta ../26_1

console.log(`Quantidade de arquivos: ${minhaPasta.length}`);

let tamanhoTotalDaPasta = 0; // Zero por enquanto.

for (const arquivo of minhaPasta) {
  if (arquivo !== 'node_modules') {
    const arquivoAtual = fs.readFileSync(`${path}/${arquivo}`);
    tamanhoTotalDaPasta += arquivoAtual.byteLength;
  }
}

console.log(`Tamanho total da Pasta: ${tamanhoTotalDaPasta} bytes`);
console.log(`Tempo de execução: ${Date.now() - inicioDoScript} milisegundos`);