import React from "react";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <div className={css.textContainer}>
        <div data-glitch="Tic Tac Toe" className={css.glitch}>
          Tic Tac Toe
        </div>
        <div className={css.subTitle}>888 Sparkware</div>
      </div>
    </div>
  );
};

export default Loader;
