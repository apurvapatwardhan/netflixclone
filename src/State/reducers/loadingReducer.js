const initState = {
    searchLoading : false,
    videoListLoading: false
}

const loadingReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_SEARCHLIST_LOADING":
            return {...state, searchLoading: action.payload}
        case "SET_VIDEOLIST_LOADING":
             return {...state, videoListLoading: action.payload}
        default:
            return state;
    }
}

export default loadingReducer