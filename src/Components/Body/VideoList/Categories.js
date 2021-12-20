import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genreListAction, movieListAction } from "../../../State/action/action";
import VideoList from "./VideoList";

function Categories() {
  const genres = useSelector((selector) => selector.genre);
  const movies = useSelector((selector) => selector.movie);
  const dispatch = useDispatch();

  console.log(genres);

  useEffect(() => {
    console.log(process.env);
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => dispatch(genreListAction(data.genres)));
  }, []);

  useEffect(() => {
    console.log(movies, "outside");
    let ix = 0;
    let p1 = fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genres[0]?.id}`
    );
    let p2 = fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genres[1]?.id}`
    );
    let p3 = fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genres[2]?.id}`
    );
    let p4 = fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genres[3]?.id}`
    );
    let p5 = fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genres[4]?.id}`
    );
    p1.then((resp) => resp.json()).then((data) =>
      dispatch(movieListAction(genres[0]?.name, data.results))
    );
    p2.then((resp) => resp.json()).then((data) =>
      dispatch(movieListAction(genres[1]?.name, data.results))
    );
    p3.then((resp) => resp.json()).then((data) =>
      dispatch(movieListAction(genres[2]?.name, data.results))
    );
    p4.then((resp) => resp.json()).then((data) =>
      dispatch(movieListAction(genres[3]?.name, data.results))
    );
    p5.then((resp) => resp.json()).then((data) =>
      dispatch(movieListAction(genres[4]?.name, data.results))
    );
  }, [genres]);

  return (
    <>
      {genres?.slice(0, 5).map((genre) => {
        return <VideoList title={genre?.name} movieList={movies[genre?.name]} />;
      })}
      {/* <VideoList title={genres[0]?.name} movies={movies[genres[0]?.name]} />
      <VideoList title={genres[1]?.name} movies={movies[genres[1]?.name]} />
      <VideoList title={genres[2]?.name} movies={movies[genres[2]?.name]} />
      <VideoList title={genres[3]?.name} movies={movies[genres[3]?.name]} />
      <VideoList title={genres[4]?.name} movies={movies[genres[4]?.name]} /> */}
    </>
  );
}

export default Categories;
