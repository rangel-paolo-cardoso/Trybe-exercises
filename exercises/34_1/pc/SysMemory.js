const so = require('os');

setInterval(() => {
  const usedMemory = so.totalmem() - so.freemem();
  console.log(`RAM Disponível: ${parseInt(so.freemem / Math.pow(1024, 2))} MB`);
  console.log(`RAM Total: ${parseInt(so.totalmem / Math.pow(1024, 2))} MB`);
  console.log(`Memória utilizada pelo sistema: ${parseInt(usedMemory / Math.pow(1024, 2))} MB\n`);
}, 1000);
