import { display } from "@mui/system";
import { errorAction, loadingAction, searchListAction } from "../State/action/action";
import { searchApi } from "./apiCalls";

export const searchApiCall = async function (searchInput, dispatch) {
  try {
    dispatch(errorAction(""));
    const resp = await fetch(`${searchApi}${searchInput}`);
    if(!resp.ok) {
        throw new Error("Failed to Search Sorry!!!! its not my problem")
    }
    const data = await resp.json();
    dispatch(searchListAction(data.results));
    dispatch(loadingAction(false, "SET_SEARCHLIST_LOADING"));
  } catch (err) {
    dispatch(loadingAction(false, "SET_SEARCHLIST_LOADING"));
    dispatch(errorAction(err.message));
  }
};
