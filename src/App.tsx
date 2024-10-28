// src/App.tsx
import React from "react";
import Board from "./components/Board.tsx";
import './App.css'; // Optional: For adding styles

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <h1 id="player-inidicator">Player's Turn</h1>
      <button id="start-btn">Start Game</button>
      <Board />
    </div>
  );
};

export default App;
