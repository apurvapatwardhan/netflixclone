const initState = [];

const seriesGenreReducer = (state=initState, action) => {
    switch(action.type) {
        case "SET_SERIES_GENRES": return [...action.payload];
        default:return state;
    }
}

export default seriesGenreReducer;