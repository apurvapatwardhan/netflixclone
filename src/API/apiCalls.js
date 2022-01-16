const API_KEY = `813f004417e46fdc21b11b2dbcd0d00c`

export const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const seriesGenreApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const movieGenreApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const seriesApi = `https://api.themoviedb.org/3/discover/tv?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&with_genres=`;
export const moviesApi = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=`
export const searchTvApi = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&query=money`