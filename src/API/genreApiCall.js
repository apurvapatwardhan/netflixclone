import { genreListAction, seriesGenresAction } from "../State/action/action";
import { seriesGenreApi } from "./apiCalls";

const typeAction = function(type) {
    if(type === "seriesAction") {
        return seriesGenresAction;
    }
    if(type === "movieListAction"){
        return genreListAction;
    }
}

export const genreApiCall = async function(dispatch, type) {
    const resp = await fetch(seriesGenreApi);
    const data = await resp.json();
    dispatch(typeAction(type)(data.genres));
}