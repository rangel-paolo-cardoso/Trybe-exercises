const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public');
});

const messages = [];
io.on('connection', (socket) => {
  socket.on('sendMessage', (data) => {});
});

server.listen(3000);
