import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1: {
    name: "",
    role: "X",
  },
  player2: {
    name: "",
    role: "O",
  },
  squares: Array(9).fill(null),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    savePlayer1Name: (state, action) => {
      state.player1.name = action.payload;
    },
    savePlayer2Name: (state, action) => {
      state.player2.name = action.payload;
    },
    changeSquares: (state, action) => {
      state.squares = action.payload;
    },
    resetSquares: (state) => {
      state.squares = Array(9).fill(null);
    },
    resetGame: (state) => {
      state.player1 = initialState.player1;
      state.player2 = initialState.player2;
      state.squares = Array(9).fill(null);
    },
  },
});

export const {
  savePlayer1Name,
  savePlayer2Name,
  changeSquares,
  resetSquares,
  resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;
