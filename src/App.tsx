// src/App.tsx
import React from "react";
import Board from "./components/Board.tsx";
import './App.css'; // Optional: For adding styles

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};

export default App;
