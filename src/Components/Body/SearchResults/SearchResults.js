import "./SearchResults.css";

import React from "react";
import Header from "../../header/Header";
import { useSelector } from "react-redux";
import NetflixLoader from "../../../loader";
import ErrorIcon from "@mui/icons-material/Error";
import { useDispatch } from "react-redux";
import { contentDetailsAction, showBackDropAction } from "../../../State/action/action";
import ContentModal from "../VideoList/ContentModal/ContentModal";
import Backdrop from "../VideoList/Backdrop/Backdrop";

function SearchResults() {
  let searchResults = useSelector((state) => state.searchMovie);
  searchResults = searchResults.filter(e => e.poster_path);
  const error = useSelector((state) => state.error);
  const { searchLoading } = useSelector((state) => state.loading);
  const showBackDrop = useSelector((state) => state.showBackDrop);

  const dispatch = useDispatch();

  const backdropHandler = (index) => {
    dispatch(showBackDropAction(true))
    dispatch(contentDetailsAction(searchResults[index]))
  }

  const loaderArray = new Array(20).fill(0);


  console.log(searchResults);
  return (
    <div className="search">
      {
        showBackDrop ? <Backdrop /> : null
      }
      <Header />
      <div className="search__results">
        {error.length === 0 ? (
          searchLoading ? (
            loaderArray.map((l) => <NetflixLoader showRect={false} />)
          ) : (
            searchResults?.map((sr, index) => {
              return (<div className="search__result">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${sr.poster_path}`}
                    alt="image"
                    onClick={(e) => {
                      debugger;
                      backdropHandler(index)}}
                  />
                </div>
              )
            }
          )
        ) ): (
          <div className="search__error">
            <div className="search__error__icon">
              <ErrorIcon />
            </div>
            <div className="search__error__text">
              {error}
            </div>
          </div>
        )}
      </div>
      <ContentModal />
    </div>
  );
}

export default SearchResults;
