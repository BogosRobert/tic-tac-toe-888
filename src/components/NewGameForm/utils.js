export const validate = (values) => {
  const errors = {};

  // if (values.player2Name && !values.player1Name) {
  //   errors.error = "A name for Player 1 is required";
  // }

  // if (values.player1Name && !values.player2Name) {
  //   errors.error = "A name for Player 2 is required";
  // }

  if (
    values.player1Name === values.player2Name &&
    values.player1Name &&
    values.player2Name
  ) {
    errors.error = "Player 1 and Player 2 names should not be identical!";
  }
  return errors;
};
