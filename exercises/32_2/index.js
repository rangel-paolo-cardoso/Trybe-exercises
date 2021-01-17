const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public');
});

const messages = []; // armazena as mensagens
io.on('connection', (socket) => {
  socket.emit('previousMessages', messages);

  socket.on('sendMessage', (data) => { // evento que ouve o front e recebe dados com o nome de 'sendMessage'
    messages.push(data); // coloca no array de mensagens
    socket.broadcast.emit('receivedMessage', data); // envia pra todo mundo
  });
});

server.listen(3000);
