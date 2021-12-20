const initState = {};

const movieReducer = (state = initState, action) => {
  const id = action.id;
  const payload = action.payload;
  switch (action.type) {
    case "SET_MOVIES":
      
      if(id) {
        state[id] = payload
      }
      console.log(state,"red");
      return state;
    default:
      return state;
  }
};

export default movieReducer;
