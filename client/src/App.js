import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import openSocket from 'socket.io-client';
import PlayButton from './Buttons/PlayButton';
import ResetButton from './Buttons/ResetButton';

function ButtonGame() {

  // Initialize states

  const [prize, setPrize] = useState('');
  const [status, setStatus] = useState(true);
  const [gameData, setGameData] = useState({counter: 0, winCounter: 0, points: 0});
  const [socket, setSocket] = useState();
  const [transition, setTransition] = useState(false);

  // Initialize socket, get game information from the server and set socket to the state

  useEffect(() => {
    const socket = openSocket('http://localhost:5000');
    socket.on('result', handleData);
    setSocket(socket);
  }, []);

  // Check points and win condition, handle incoming game information and reset transition

  const handleData = (data) => {
    checkPoints(data.points);
    checkIfPlayerWon(data.counter);
    setGameData(data);
    setTransition(false);
  };

  // Check if player has won

  const checkIfPlayerWon = (counter) => {
    if(counter > 0) {
      if(counter % 500 === 0) {
        setPrize("You have won 250 points!")
      } else if (counter % 100 === 0) {
        setPrize("You have won 40 points!")
      } else if (counter % 10 === 0) {
        setPrize("You have won 5 points!")
    } else {
      return;
    }};
  };

  // Check if player's points have ran out

  const checkPoints = (points) => {
    if(points === 0 ) {
      setStatus(!status)
    };
  };

  // Initialize play

  const play = () => {
    socket.emit('click');
    setPrize('');
    setTransition(true);
  };

  // Option for restarting the game if points have ran out 

  const newGame = () => {
    socket.emit('reset');
    setStatus(!status);
  };


  // User Interface

  return (
    status
    ?
    <div className="App">
      <br/>
      <PlayButton play={play}/>
        <label className="text points-value-wincounter">{gameData.winCounter}</label>
        <label className="text">Clicks for next prize</label>
        <label className="text">Clicks left</label>
        <label className={gameData.points <= 5 ? "testi points-under-5" : gameData.points <= 10 ? "points-under-10" : "points-value-text"}>{gameData.points}</label>
        <CSSTransition 
          in={transition}
          timeout={2000} 
          classNames="slide"
          >
            {
              !prize 
              ? <label className="animating point-decrement">-1</label>
              : <label className="animating point-increment">{prize}</label>
            }
        </CSSTransition>
        <br/>
    </div>
    :
    <div className="App">
      <h1>You have ran out of points!</h1>
      <ResetButton reset={newGame}/>
    </div>
  );
};

export default ButtonGame;
