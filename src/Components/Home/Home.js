import React from "react";
import { useSelector } from "react-redux";
import Body from "../Body/Body";
import Categories from "../Body/VideoList/Categories";
import Header from "../header/Header";

function Home() {
  const movieGenres = useSelector((selector) => selector.genre);

  return (
    <div className="home">
      <Header />
      <Body />
      <div className="videos">
        <Categories type = {"movieListAction"} genre={movieGenres}/>
      </div>
    </div>
  );
}

export default Home;
