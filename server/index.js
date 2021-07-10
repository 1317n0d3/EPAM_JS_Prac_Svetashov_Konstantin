const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const allUsers = [];
const allMessages = [];


function sendUserCountByAll(allUsers) { allUsers.forEach(socket => socket.emit('user', allUsers.length)) }
function sendMessagesByAll(allUsers, allMessages) { allUsers.forEach(socket => socket.emit('audioMessage', allMessages[allMessages.length - 1])) }

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/voices', function (req, res) {
  res.send(allMessages);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  allUsers.push(socket);
  
  sendUserCountByAll(allUsers);
  
  socket.on('disconnect', () => {
    console.log('a user disconnected');
    allUsers.splice(allUsers.indexOf(socket), 1);
    
    sendUserCountByAll(allUsers);
  });

  socket.on('audioMessage', (audioChunks) => {
    allMessages.push(audioChunks);
    sendMessagesByAll(allUsers, allMessages);
  });
});

server.listen(9000, () => {
  console.log('listening on localhost:9000');
});