import React from "react";
import "./Winner.css";
import NewGame from "../newGamePuzzle/NewGamePuzzle.jsx";

const Winner = ({ numbers, reset }) => {
  if (!numbers.every((n) => n.value === n.index + 1)) return null;
  return (
    <div className="winner">
      <p>You won!</p>
      <NewGame reset={reset}></NewGame>
    </div>
  );
};

export default Winner;
