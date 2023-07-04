import React from "react";
import css from "./TurnsTracker.module.css";

const TurnsTracker = (props) => {
  const { focusedPlayer } = props;
  const title = "Current player: " + focusedPlayer?.name;
  return <h2 className={css.title}>{title}</h2>;
};

export default TurnsTracker;
