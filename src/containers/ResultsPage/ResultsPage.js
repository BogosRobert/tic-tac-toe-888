import React from "react";
import css from "./ResultsPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { changeSquares } from "../../store/reducers/gameReducer";
import { useDispatch } from "react-redux";

const ResultsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const receivedState = location.state;
  const winner = receivedState.winner;
  const loser = receivedState.loser;
  const draw = receivedState.draw;

  const handleReset = () => {
    dispatch(changeSquares(Array(9).fill(null)));
    navigate("/");
  };

  if (draw) {
    return (
      <div className={css.wrapper}>
        <h2>Draw {"🤝"}</h2>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  }

  return (
    <div className={css.wrapper}>
      <h2>
        Winner: {winner.name} {"🥳"}
      </h2>

      <h2>
        Loser: {loser.name} {"😢"}
      </h2>

      <button type="button" onClick={handleReset}>
        Start new game
      </button>
    </div>
  );
};

export default ResultsPage;
