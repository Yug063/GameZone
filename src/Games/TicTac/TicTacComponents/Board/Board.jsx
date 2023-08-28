import React from "react";
import Box from "../Box/Box";
import "./BoardStyles.css";
const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            onClick={() => value === null && onClick(idx)}
          ></Box>
        );
      })}
    </div>
  );
};

export default Board;
