import React, { useEffect, useState } from "react";
import css from "./NewGamePage.module.css";
import Loader from "../../components/Loader/Loader";
import NewGameForm from "../../components/NewGameForm/NewGameForm";

const NewGamePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <div className={css.wrapper}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={css.wrapper}>
      <NewGameForm />
    </div>
  );
};

export default NewGamePage;
