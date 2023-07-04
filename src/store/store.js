import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameReducer";

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
