

const contentDetailsReducer = (state={}, action) => {
    switch(action.type) {
        case "SET_DETAILS":
            return action.payload;
        default:
            return state;
    }
}

export default contentDetailsReducer