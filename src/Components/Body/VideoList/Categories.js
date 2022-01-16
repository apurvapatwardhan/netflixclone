import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataApiCall } from "../../../API/dataApiCall";
import { genreApiCall } from "../../../API/genreApiCall";
import { genreListAction, movieListAction } from "../../../State/action/action";
import { API_KEY } from "../../config";
import VideoList from "./VideoList";

function Categories({type, genre}) {
  const movieGenres = useSelector((selector) => selector.genre);
  const movies = useSelector((selector) => selector.movie);
  const seriesGenres = useSelector((selector) => selector.seriesGenre);
  const series = useSelector((selector) => selector.series);
  const dispatch = useDispatch();

  let genres;

  console.log(genres);

  genres = (type === "seriesAction" ? seriesGenres : movieGenres)

  const loaderArray = new Array(20).fill(0);

  useEffect(() => {
    // fetch(
    //   `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    // )
    //   .then((resp) => resp.json())
    //   .then((data) => dispatch(genreListAction(data.genres)));
    genreApiCall(dispatch, type)
  }, []);


  useEffect(() => {
    console.log(movies, "outside");
    // let p1 = fetch(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genres[0]?.id}`
    // );

    // let urls = [];
    // genres.slice(0, 9)?.forEach((g) => {
    //   urls.push(
    //     fetch(
    //       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${g?.id}`
    //     )
    //   );
    // });
    // Promise.all(urls).then(resp => resp.forEach((r, i) => r.json().then(data => dispatch(movieListAction(genres[i]?.name, data.results)))));
    // p1.then((resp) => resp.json()).then((data) =>
    //   dispatch(movieListAction(genres[0]?.name, data.results))
    // );
    dataApiCall(genres.slice(0, 9), dispatch, type)

  }, [genres]);
  console.log(movies[genres[1]?.name]);
  return (
    <>
      {genres?.slice(0, 9).map((genre) => {
        let results = (type === "seriesAction" ? series[genre?.name] : movies[genre?.name])
        return results?.length > 0 ? (
          <VideoList title={genre?.name} movieList={(type === "seriesAction" ? series[genre?.name] : movies[genre?.name])} />
        ) : null;
      })}
      {/* <VideoList title={genres[0]?.name} movies={movies[genres[0]?.name]} />
       */}
    </>
  );
}

export default Categories;
