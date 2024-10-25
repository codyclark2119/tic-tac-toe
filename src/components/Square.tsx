// src/components/Square.tsx
import React from "react";

interface SquareProps {
  value: string | null;
}

const Square: React.FC<SquareProps> = ({ value }) => {
  return (
    <button className="square">
      {value}
    </button>
  );
};

export default Square;
