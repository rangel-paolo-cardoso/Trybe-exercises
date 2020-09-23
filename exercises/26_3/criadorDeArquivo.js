const fs = require('fs');

let meuTexto = 'dfngljdfngldsnksdnksd;gmfsdkgnkdfngdfsnglksdnfj,sdngnfsdkgnfd,ng,fdng,nfd,gnfd,mgn,sfdng,sdn,dfmnxbcvnbxmvbd.,jvn,sdjgn,fdjjn.,dfnj.,fdn,fdbv.dfb.nvbfbndfmnbfdmvbfjvbfdj.vfsdj';

for (let i = 0; i < 1000000; i += 1) {
  meuTexto += 'kfdjbgkjfsdgsdfngdfs.n';
}

fs.writeFile('./teste2.txt', meuTexto, { flag: 'wx' }, (err) => {
  if (err) throw err;
  console.log('Arquivo salvo!');
});
