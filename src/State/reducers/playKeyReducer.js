const initState = "";

export const playKeyReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_YT_KEY": 
          return action.payload;
        default: 
          return state
    }
}

export default playKeyReducer;