import React, { useState } from "react";
import "./TicTacToe.css";
import Board from "./TicTacComponents/Board/Board.jsx";
import ScoreBoard from "./TicTacComponents/ScoreBoard/ScoreBoard.jsx";
import ResetButton from "./TicTacComponents/ResetButton/ResetButton.jsx";
import ResetScore from "./TicTacComponents/ResetScore/ResetScore.jsx";
const TicTacToe = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setboard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameover] = useState(false);

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameover(true);
        return board[x];
      }
    }
  };
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setboard(updatedBoard);
    setXPlaying(!xPlaying);
  };
  const resetBoard = () => {
    setGameover(false);
    setboard(Array(9).fill(null));
  };
  const resetScore = () => {
    setScores({ xScore: 0, oScore: 0 });
  };
  return (
    <div className="tic">
      <div className="TicTacToe">
        <div className="outerBox">
          <ScoreBoard scores={scores} xPlaying={xPlaying}></ScoreBoard>
          <Board
            board={board}
            onClick={gameOver ? resetBoard : handleBoxClick}
          ></Board>
          <ResetButton resetBoard={resetBoard}></ResetButton>
          <ResetScore resetScore={resetScore}></ResetScore>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
