import React, { useEffect, useState } from "react";
import css from "./GamePage.module.css";
import Board from "../../components/Board/Board";
import { useNavigate } from "react-router-dom";
import TurnsTracker from "../../components/TurnsTracker/TurnsTracker";
import { getOtherPlayer, winningCombinations } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSquares,
  resetGame,
  resetSquares,
} from "../../store/reducers/gameReducer";

const GamePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const squares = useSelector((state) => state.game.squares);
  const player1 = useSelector((state) => state.game.player1);
  const player2 = useSelector((state) => state.game.player2);
  useEffect(() => {
    if (!!!player1.name || !!!player2.name) {
      navigate("/");
    }
  }, [player1, player2]);

  const [focusedPlayer, setFocusedPlayer] = useState(player1);
  const allPlayers = [player1, player2];
  const otherPlayer = getOtherPlayer(focusedPlayer, allPlayers);

  const checkForWinner = (squares, player) => {
    const role = player.role;

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      if (squares[a] === role && squares[b] === role && squares[c] === role) {
        navigate("/results", {
          state: {
            winner: focusedPlayer,
            loser: otherPlayer,
            draw: false,
          },
        });

        return;
      }
    }

    if (squares.every((s) => !!s)) {
      navigate("/results", {
        state: {
          winner: null,
          loser: null,
          draw: true,
        },
      });
    }
  };

  const handleRestart = () => {
    dispatch(resetSquares());
    setFocusedPlayer(player1);
  };

  const handleStartNewGame = () => {
    dispatch(resetGame());
    navigate("/");
  };
  const handleSquareClick = (index) => {
    if (squares[index]) {
      return;
    }
    const newSquares = squares.map((square, sqIndex) => {
      if (sqIndex === index) {
        return focusedPlayer?.role;
      }
      return square;
    });

    dispatch(changeSquares(newSquares));
    //before moving to the next player turn, we need to check if we have a winner
    checkForWinner(newSquares, focusedPlayer);

    setFocusedPlayer(otherPlayer);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.boardWrapper}>
        <TurnsTracker focusedPlayer={focusedPlayer} />

        <Board
          squares={squares}
          handleSquareClick={handleSquareClick}
          focusedPlayer={focusedPlayer}
        />
      </div>

      <div className={css.actionButtonsWrapper}>
        <button type="button" onClick={handleRestart}>
          Restart Game
        </button>
        <button type="button" onClick={handleStartNewGame}>
          New Game
        </button>
      </div>
    </div>
  );
};

export default GamePage;
