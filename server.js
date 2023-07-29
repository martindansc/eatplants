const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 8000;
const { Game } = require("./lib/game");
const { startLoop } = require("./lib/loop");

app.use(express.static('public'));

io.on('connection', (socket) => {

  socket.on('move_bug', (msg) => {
    
  });

});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);

  const game = new Game();
  startLoop(game);

});