import React from 'react';
import '../Button.css';

function PlayButton (p) {

  return (
    <div>
      <button onClick={p.play} className="button">Click</button>
    </div>
  );
};

export default PlayButton;