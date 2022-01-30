function ActionConstructor(type, payload, id="") {
  this.type = type;
  this.payload = payload;
  this.id = id;
}


export const movieListAction = (id, payload) => {
  //return new ActionConstructor("SET_MOVIES", payload, id)
  return {
    type: "SET_MOVIES",
    payload: payload,
    id:id
  };
};

export const genreListAction = (g) => {
  //return new ActionConstructor("SET_GENRES", g)
    return {
        type:"SET_GENRES",
        payload:g
    }
}

export const searchListAction = (payload) => {
  //return new ActionConstructor("SET_SEARCH_MOVIES", payload)
  return {
    type:"SET_SEARCH_MOVIES",
    payload:payload
  }
}

export const searchInputAction = (p) => {
  //return new ActionConstructor("SET_SEARCH_INPUT", p)
  return {
    type:"SET_SEARCH_INPUT",
    payload:p
  }
}

export const loadingAction = (p, type) => {
  //return new ActionConstructor(type, p)
  return {
    type:type,
    payload:p
  }
}

export const seriesGenresAction = (p) => {
  //return new ActionConstructor("SET_SERIES_GENRES", p)
  return {
    type:"SET_SERIES_GENRES",
    payload:p
  }
}

export const seriesAction = (id, p) => {
  //return new ActionConstructor("SET_SERIES", p, id)
  return {
    type:"SET_SERIES",
    payload:p, 
    id:id
  }
}

export const errorAction = (p) => {
  // return new ActionConstructor("SET_ERROR", p)
  return {
    type:"SET_ERROR",
    payload: p
  }
}

export const showBackDropAction = (p) => {
  //return new ActionConstructor("SET_SHOWBACKDROP", p)
  return {
    type: "SET_SHOWBACKDROP",
    payload:p
  }
}

export const contentDetailsAction = (p) => {
  return {
    type:"SET_DETAILS",
    payload:p
  }
}

