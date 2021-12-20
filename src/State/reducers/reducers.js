import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({movie:movieReducer,genre:genreReducer})

export default rootReducer;
