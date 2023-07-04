import React from "react";
import css from "./Board.module.css";
import BoardSquare from "../BoardSquare/BoardSquare";
const Board = (props) => {
  const { squares, handleSquareClick, focusedPlayer } = props;
  return (
    <div className={css.board}>
      {squares.map((s, index) => {
        const currentLabel = squares[index] && focusedPlayer?.role;

        return (
          <BoardSquare
            key={index}
            value={s || currentLabel}
            index={index}
            handleSquareClick={handleSquareClick}
            focusedPlayer={focusedPlayer}
          />
        );
      })}
    </div>
  );
};

export default Board;
