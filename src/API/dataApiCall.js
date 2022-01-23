import { seriesAction, movieListAction, errorAction } from "../State/action/action";
import { moviesApi, seriesApi, seriesGenreApi } from "./apiCalls";

const typeAction = function (type) {
  if (type === "seriesAction") {
    return seriesAction;
  }
  if (type === "movieListAction") {
    return movieListAction;
  }
};

export const dataApiCall = async function (genres, dispatch, type) {
  dispatch(errorAction(""));
  const apiType = type === "seriesAction" ? seriesApi : moviesApi;
  const promises = [];
  if (genres) {
    for (let genre of genres) {
      promises.push(fetch(`${apiType}${genre.id}`));
    }
    if (promises.length > 0) {
      try {
        const responses = await Promise.all(promises);
        if (responses.reason) {
          throw new Error("Data call not possible");
        }
        for (let i = 0; i < responses.length; i++) {
          let { results } = await responses[i].json();
          dispatch(typeAction(type)(genres[i].name, results));
        }
        // dispatch(errorAction(""));
      } catch (err) {
          console.log(err.message)
          dispatch(errorAction(err.message));
      }
    }
  }
};
