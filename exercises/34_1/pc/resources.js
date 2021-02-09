const so = require('os');

console.log('Sistema Operacional: ', so.platform());
console.log('Versão: ', so.release());
console.log('Arquitetura: ', so.arch());

const cores = so.cpus();

console.log('Cores: ', cores.length);
cores.forEach((core, index) => {
  console.log(`Core${index + 1} - Modelo: ${core.model} - Speed: ${core.speed / 1000}Ghz`);
});

console.log(`Memória disponível: ${so.totalmem() / Math.pow(1024, 3)}GB`);

