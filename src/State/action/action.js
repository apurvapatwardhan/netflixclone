export const movieListAction = (id, payload) => {
  return {
    type: "SET_MOVIES",
    payload: payload,
    id:id
  };
};

export const genreListAction = (g) => {
    return {
        type:"SET_GENRES",
        payload:g
    }
}


