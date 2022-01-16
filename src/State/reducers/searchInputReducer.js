const initState = "";

const searchInputReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_SEARCH_INPUT":
            return action.payload;
        default:
            return state;
    }
}

export default searchInputReducer;