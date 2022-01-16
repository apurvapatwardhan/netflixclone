const seriesReducer = (state = {}, action) => {
  const id = action.id;
  const payload = action.payload;
  switch (action.type) {
    case "SET_SERIES":
      if (id) {
        state[id] = payload;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default seriesReducer;
