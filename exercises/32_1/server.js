const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado!');

  socket.on('end', () => {
    console.log('Cliente desconectado!');
  });

  server.getConnections((error, count) => {
    console.log(`Conexões: ${count}`);
  });

  socket.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
  });

  // socket.write('Mensagem do servidor!\r\n');
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
