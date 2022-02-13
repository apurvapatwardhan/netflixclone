import { errorAction, playKeyAction } from "../State/action/action";
import { playApiSuffix, playMovieApi } from "./apiCalls";
import { playTVapi } from "./apiCalls";

const playApiCall = async function(id, release_date, dispatch) {
    let url = release_date ? `${playMovieApi}${id}${playApiSuffix}` : `${playTVapi}${id}${playApiSuffix}`
    dispatch(errorAction(""));
    const resp = await fetch(url);
    if(!resp.ok) {
        throw new Error("Failed to Search Sorry!!!! its not my problem")
    }
    const {results} = await resp.json();
    if(results.length === 0) {
        alert('no video found')
    }
    else{
        console.log(results)
        dispatch(playKeyAction(results[0]?.key))
    }
}

export default playApiCall;