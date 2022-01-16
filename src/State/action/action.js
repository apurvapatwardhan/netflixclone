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

export const searchListAction = (payload) => {
  return {
    type:"SET_SEARCH_MOVIES",
    payload:payload
  }
}

export const searchInputAction = (p) => {
  return {
    type:"SET_SEARCH_INPUT",
    payload:p
  }
}

export const loadingAction = (p, type) => {
  return {
    type:type,
    payload:p
  }
}

export const seriesGenresAction = (p) => {
  return {
    type:"SET_SERIES_GENRES",
    payload:p
  }
}

export const seriesAction = (id, p) => {
  return {
    type:"SET_SERIES",
    payload:p, 
    id:id
  }
}

