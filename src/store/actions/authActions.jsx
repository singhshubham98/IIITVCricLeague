export const SignUpPlayer = player => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("player")
      .add({
        ...player,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS_PLAYER", player });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_PLAYER_ERROR", err });
      });
  };
};
