const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('mensagem', (msg) => {
    io.broadcast.emit('mensagemServer', msg);
  });

  socket.on('disconnect', () => {
    io.emit('adeus', { mensagem: 'Poxa, está muito cedo para ir embora!' });
  });
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
