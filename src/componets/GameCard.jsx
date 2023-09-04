import React from "react";

function GameCard({game}) {
  return (
    <div className="gamecard">
      <div className="game">
        <img src={game.background_image} alt="game" />
      </div>
      <div>
        <span>{game.rating}</span>
        <h3>{game.name}</h3>
      </div>
    </div>
  );
}

export default GameCard;
