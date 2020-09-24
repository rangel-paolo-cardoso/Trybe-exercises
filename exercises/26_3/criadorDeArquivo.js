const fs = require('fs');
const { question, questionInt } = require('readline-sync');

let meuTexto = 'dfngljdfngldsnksdnksd;gmfsdkgnkdfngdfsnglksdnfj,sdngnfsdkgnfd,ng,fdng,nfd,gnfd,mgn,sfdng,sdn,dfmnxbcvnbxmvbd.,jvn,sdjgn,fdjjn.,dfnj.,fdn,fdbv.dfb.nvbfbndfmnbfdmvbfjvbfdj.vfsdj';

const quantasRepeticoes = questionInt('quantas vezes pra rodar o loop? (Mínimo 1 milhão) ');

for (let i = 1; i <= quantasRepeticoes; i += 1) {
  meuTexto += 'kfdjbgkjfsdgsdfngdfs.n';
}

function leNomeDeArquivo () {
  const nomeArquivo = question('Qual vai ser o nome do arquivo/extensão? (exemplo: arquivo.txt) ');
  return nomeArquivo.replace(/ /g, '').replace(/,/g, '');
}

function criaArquivo () {
  const arquivo = leNomeDeArquivo();
  fs.writeFile(`./${arquivo}`, meuTexto, { flag: 'wx' }, (err) => {
    if (err) throw err;
    console.log('Arquivo salvo!');
  });
}

criaArquivo();
