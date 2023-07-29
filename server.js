const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 8000;
const { Game } = require("./lib/game");
const { startLoop } = require("./lib/loop");

const game = new Game();

app.use(express.static('public'));

io.on('connection', (socket) => {

  if(game.player_counter == 0) {
    game.init();
    game.startGame();
  }

  game.addPlayer(socket.id);
  io.emit("playerCount", Object.keys(game.players).length);

  socket.on('add_action', (obj) => {
    game.addAction(socket.id, obj);
  });

  socket.on('disconnect', function(){
    game.removePlayer(socket.id);
  });
  
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);

  startLoop(game, io);
});