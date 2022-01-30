const initState = false;

const backDropReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_SHOWBACKDROP":
            return action.payload;
        default: 
            return state;
    }
}

export default backDropReducer