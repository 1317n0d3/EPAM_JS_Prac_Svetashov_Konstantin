const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

let allUsers = [];

function sendUserCountByAll(allUsers) {
  allUsers.forEach(socket => socket.emit('user', allUsers.length));
}

io.on('connection', (socket) => {
  console.log('a user connected');
  allUsers.push(socket);
  
  sendUserCountByAll(allUsers);
  
  socket.on('disconnect', () => {
    console.log('a user disconnected');
    allUsers.splice(allUsers.indexOf(socket), 1);
    
    sendUserCountByAll(allUsers);
  });
});

server.listen(9000, () => {
  console.log('listening on localhost:9000');
});