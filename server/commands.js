module.exports = {

  // gamedata

  gameData: [{counter: 0, winCounter: 10}, {players: []} ],

  // -- GAME COMMANDS FOR OPERATING THE GAME-- \\

    // check if player already exists and if not, add to the playerlist

    addPlayer: function (ip, c) {
      if(!c.getPlayer(ip, c)) {
        c.gameData[1].players.push({id: ip, points: 20})
        console.log("player added")
      } else {
        return;
      };
    },

    // check if player is on playerlist

    getPlayer: function (ip, c) {
      for(let i = 0; c.gameData[1].players.length > i; i++) {
        if(c.gameData[1].players[i].id === ip) {
          return true;
        };
      };
      return false;
    },

    // get player index from list

    getPlayerIndex: function (ip, c) {
      for(let i = 0; c.gameData[1].players.length > i; i++) {
        if(c.gameData[1].players[i].id === ip) {
          return i;
        };
      };
    },

    // check counter if player has won after click

    checkIfPlayerWon: function (id, c) {
        if(c.gameData[0].counter % 500 === 0) {
          c.gameData[1].players[id].points += 250;
        } else if (c.gameData[0].counter % 100 === 0) {
          c.gameData[1].players[id].points += 40;
        } else if (c.gameData[0].counter % 10 === 0) {
          c.gameData[1].players[id].points += 5;
        } else {
          return;
        }
    },

    // reduce one point from player 

    reducePlayerPoint: function (id, c) {
      if(c.gameData[1].players[id].points > 0) {
        c.gameData[1].players[id].points -= 1;
      } else {
        return;
      }
    },

    // handle counter to calculate next win

    nextWinCounter: function (c) {
      if(c.gameData[0].winCounter > 1) {
        c.gameData[0].winCounter --;
      } else {
        c.gameData[0].winCounter = 10;
      };
    },

    // operate both counters

    handleCounters: function (id, c) {
      if(c.gameData[1].players[id].points > 0) {
        c.gameData[0].counter ++;
        c.nextWinCounter(c);
      };
    },

    // send game data to the client

    sendGameData: function (c, socket, id) {
      socket.emit('play', {counter: c.gameData[0].counter, winCounter: c.gameData[0].winCounter, points: c.gameData[1].players[id].points});
    },

    // set new game after points have ran out

    newGame: function (id, c) {
      c.gameData[1].players[id].points = 20;
    },

    // play

    play: function (id, c) {
      c.handleCounters(id, c);
      c.reducePlayerPoint(id, c);
      c.checkIfPlayerWon(id, c);
    }
  }
