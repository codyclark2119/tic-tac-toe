// src/components/Board.tsx
import React from "react";
import Square from "./Square.tsx";

const Board: React.FC = () => {
  // Array to represent the 9 squares
  const renderSquare = (i: number) => {
    return <Square key={i} value={null} />;
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
