import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import loadingReducer from "./loadingReducer";
import movieReducer from "./movieReducer";
import searchInputReducer from "./searchInputReducer";
import searchMovieReducer from "./searchMovieReducer";
import seriesReducer from "./seriesReducer";
import seriesGenreReducer from "./seriesGenreReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
  searchMovie: searchMovieReducer,
  searchInput: searchInputReducer,
  loading: loadingReducer,
  seriesGenre: seriesGenreReducer,
  series: seriesReducer,
  error: errorReducer
});

export default rootReducer;
