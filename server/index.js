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
function sendMessageByAll(allUsers, message) { allUsers.forEach(socket => socket.emit('audioMessage', message)) }

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/voices', function (req, res) {
  res.send(JSON.stringify(allMessages));
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
    allMessages.push({
      'timeStamp': new Date().getTime(),
      'audioBlob': audioChunks
    });
    sendMessageByAll(allUsers, audioChunks);
  });
});

server.listen(9000, () => {
  console.log('listening on localhost:9000');
});