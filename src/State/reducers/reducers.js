import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import loadingReducer from "./loadingReducer";
import movieReducer from "./movieReducer";
import searchInputReducer from "./searchInputReducer";
import searchMovieReducer from "./searchMovieReducer";
import seriesReducer from "./seriesReducer";
import seriesGenreReducer from "./seriesGenreReducer";
import errorReducer from "./errorReducer";
import backDropReducer from "./backDropReducer";
import contentDetailsReducer from "./contentDetailsReducer"
import playKeyReducer from "./playKeyReducer";
import playReducer from "./playReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
  searchMovie: searchMovieReducer,
  searchInput: searchInputReducer,
  loading: loadingReducer,
  seriesGenre: seriesGenreReducer,
  series: seriesReducer,
  error: errorReducer,
  showBackDrop: backDropReducer,
  contentDetails: contentDetailsReducer,
  playKey: playKeyReducer,
  play: playReducer
});

export default rootReducer;
