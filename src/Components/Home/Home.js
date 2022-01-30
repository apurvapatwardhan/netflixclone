import React from "react";
import { useSelector } from "react-redux";
import Body from "../Body/Body";
import Categories from "../Body/VideoList/Categories";
import Header from "../header/Header";
import {useState} from "react";
import Backdrop from "../Body/VideoList/Backdrop/Backdrop"
import ContentModal from "../Body/VideoList/ContentModal/ContentModal";

function Home() {
  const movieGenres = useSelector((selector) => selector.genre);
  const showBackDrop = useSelector((state) => state.showBackDrop)

  return (
    <div className="home">
      {
        showBackDrop ? <Backdrop /> : null
      }
      <Header />
      <Body />
      <div className="videos">
        <Categories type = {"movieListAction"} genre={movieGenres}/>
      </div>
      <ContentModal />
    </div>
  );
}

export default Home;
