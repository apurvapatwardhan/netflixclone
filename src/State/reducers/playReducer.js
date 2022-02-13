const initState = false;

const playReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_PLAY":
      return action.payload;
    default:
      return state;
  }
};

export default playReducer;
