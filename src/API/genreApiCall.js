import { errorAction, genreListAction, seriesGenresAction } from "../State/action/action";
import { seriesGenreApi } from "./apiCalls";

const typeAction = function (type) {
  if (type === "seriesAction") {
    return seriesGenresAction;
  }
  if (type === "movieListAction") {
    return genreListAction;
  }
};

export const genreApiCall = async function (dispatch, type) {
  try {
    dispatch(errorAction(""));
    const resp = await fetch(seriesGenreApi);
    if(!resp.ok) {
        throw new Error(`Failed to fetch genres for ${type} Sorry!!!! its not my problem`)
    }
    const data = await resp.json();
    dispatch(errorAction(""));
    dispatch(typeAction(type)(data.genres));
  } catch (err) {
        console.log(err.message);
        dispatch(errorAction(err.message));
  }
};
