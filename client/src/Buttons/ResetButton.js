import React from 'react';

function ResetButton (p) {

  return (
    <div>
      <button onClick={p.reset} className="button">New Game</button>
    </div>
  );
};

export default ResetButton;