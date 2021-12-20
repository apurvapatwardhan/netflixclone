const initState = [];

const genreReducer = (state=initState, action) => {
    switch(action.type) {
        case "SET_GENRES": return action.payload;
        default:return state;
    }
}

export default genreReducer