import React from "react";
import PuzzleBoard from "./PuzzleGameComponents/Board/PuzzleBoard.jsx";
import "./PuzzleGameStyles.css";

const PuzzleGame = () => {
  return (
    <div className="wrap">
      <div className="PuzzleGame">
        <PuzzleBoard></PuzzleBoard>
      </div>
    </div>
  );
};

export default PuzzleGame;
