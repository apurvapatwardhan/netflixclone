import { display } from "@mui/system";
import { loadingAction, searchListAction } from "../State/action/action";
import { searchApi } from "./apiCalls";

export const searchApiCall = async function(searchInput, dispatch) {
    const resp = await fetch(`${searchApi}${searchInput}`);
    const data = await resp.json();
    dispatch(loadingAction(false));
    dispatch(searchListAction(data.results))
}