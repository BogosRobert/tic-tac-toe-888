import React, { useState } from "react";
import css from "./BoardSquare.module.css";
const BoardSquare = (props) => {
  const { value, index, key, handleSquareClick, focusedPlayer } = props;
  const [hoverValue, setHoverValue] = useState(null);

  return (
    <div
      key={key}
      className={css.boardSquare}
      onClick={() => handleSquareClick(index)}
      onMouseEnter={() => setHoverValue(focusedPlayer?.role)}
      onMouseLeave={() => setHoverValue(null)}
    >
      {value || hoverValue}
    </div>
  );
};

export default BoardSquare;
