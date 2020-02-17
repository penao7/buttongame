const express = require('express');
const session = require('express-session');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketIO(server);
const path = require('path');
let date = new Date ();

// Session

const sessionMiddleware = session({
  secret: "secret", 
  resave: true,
  saveUninitialized: true,
  cookie: { expires: date.setDate(date.getDate() + 1)}
});

app.use(sessionMiddleware);

// serve static files from build

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
}); 

 // Gamedata

const gameData = [{counter: 0, winCounter: 10}, {players: []} ];

  // ---------- GAME COMMANDS FOR OPERATING THE GAME ---------- \\

// Check if player already exists and if not, add to the playerlist

  const addPlayer = (sid) => {
    if(!getPlayer(sid)) {
      gameData[1].players.push({id: sid, points: 20})
      console.log(sid + " connected");
      console.log("player added")
    } else {
      console.log(sid + " reconnected");
    };
  };

  // Check if player is on playerlist

  const getPlayer = (sid) => {
    for(let i = 0; gameData[1].players.length > i; i++) {
      if(gameData[1].players[i].id === sid) {
        return true;
      };
    };
    return false;
  };

  // Get player index from playerlist

  const getPlayerIndex = (sid) => {
    for(let i = 0; gameData[1].players.length > i; i++) {
      if(gameData[1].players[i].id === sid) {
        return i;
      };
    };
  };

  // check counter if player has won after click

  const checkIfPlayerWon = (id) => {
    if(gameData[0].counter % 500 === 0) {
      gameData[1].players[id].points += 250;
    } else if (gameData[0].counter % 100 === 0) {
       gameData[1].players[id].points += 40;
    } else if (gameData[0].counter % 10 === 0) {
      gameData[1].players[id].points += 5;
    } else {
      return;
    };
  };

  // Reduce one point from player 

  const reducePlayerPoint = (id) => {
    if(gameData[1].players[id].points > 0) {
      gameData[1].players[id].points -= 1;
    } else {
      return;
    };
  };

  // Handle counter to calculate next win

  const nextWinCounter = () => {
    if(gameData[0].winCounter > 1) {
      gameData[0].winCounter --;
    } else {
      gameData[0].winCounter = 10;
    };
  };

  // Operate both counters

  const handleCounters = (id) => {
    if(gameData[1].players[id].points > 0) {
      gameData[0].counter ++;
      nextWinCounter();
    };
  };

  // Reset player points

  const newGame = (id) => {
    gameData[1].players[id].points = 20;
  };

  // Send game data to the client

  const sendGameData = (id, socket) => {
    socket.emit('result', {counter: gameData[0].counter, winCounter: gameData[0].winCounter, points: gameData[1].players[id].points});
  };
     

   // Play game

  const play = (id) => {
    handleCounters(id);
    reducePlayerPoint(id);
    checkIfPlayerWon(id);
  };

  const handleOperation = (socket) => {
      const sid = socket.request.sessionID;
      addPlayer(sid);
      const id = getPlayerIndex(sid);

      sendGameData(id,socket);

      socket.on('click', function () {
        play(id);
        sendGameData(id,socket);
      });
    
      socket.on('reset', function () {
        newGame(id);
        sendGameData(id,socket);
    });

      socket.on('disconnect', function () {
        console.log(sid + " disconnected");
      });
   };

   // Socket operation

  io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next)
  });

  io.on('connection', handleOperation);

  // Listen server
    
  server.listen(port, () => console.log(`Listening on port ${port}`));