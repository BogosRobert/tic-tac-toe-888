import React from "react";
import { Form, Field } from "react-final-form";
import css from "./NewGameForm.module.css";
import { validate } from "./utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  savePlayer1Name,
  savePlayer2Name,
} from "../../store/reducers/gameReducer";

const NewGameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    if (!values.player1Name || !values.player2Name) {
      return;
    }
    dispatch(savePlayer1Name(values.player1Name));
    dispatch(savePlayer2Name(values.player2Name));
    navigate("/game");
  };

  const handleKeyDown = (event, values) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit(values);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, pristine, values, errors }) => {
        const submitDisabled =
          submitting ||
          pristine ||
          !values.player1Name ||
          !values.player2Name ||
          errors.error;

        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className={css.formWrapper}
          >
            <h2>Start New Game</h2>
            <div className={css.fieldWrapper}>
              <label className={css.inputLabel}>Choose Player 1 name:</label>
              <Field
                className={css.formInput}
                name="player1Name"
                component="input"
                type="text"
                placeholder="Type here..."
                onKeyDown={(e) => handleKeyDown(e, values)}
              />
            </div>
            <div className={css.fieldWrapper}>
              <label className={css.inputLabel}>Choose Player 2 name:</label>
              <Field
                className={css.formInput}
                name="player2Name"
                component="input"
                type="text"
                placeholder="Type here..."
                onKeyDown={(e) => handleKeyDown(e, values)}
              />
            </div>
            {errors.error && <p className={css.error}>{errors.error}</p>}
            <button type="submit" disabled={submitDisabled}>
              Start New Game
            </button>
          </form>
        );
      }}
    />
  );
};

export default NewGameForm;
