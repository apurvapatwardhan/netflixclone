import "./SearchResults.css";

import React from "react";
import Header from "../../header/Header";
import { useSelector } from "react-redux";
import NetflixLoader from "../../../loader";
import ErrorIcon from "@mui/icons-material/Error";

function SearchResults() {
  const searchResults = useSelector((state) => state.searchMovie);
  const error = useSelector((state) => state.error);
  const { searchLoading } = useSelector((state) => state.loading);

  const loaderArray = new Array(20).fill(0);

  console.log(searchResults);
  return (
    <div className="search">
      <Header />
      <div className="search__results">
        {error.length === 0 ? (
          searchLoading ? (
            loaderArray.map((l) => <NetflixLoader showRect={false} />)
          ) : (
            searchResults
              ?.filter((sr) => sr.poster_path)
              .map((sr) => (
                <div className="search__result">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${sr.poster_path}`}
                    alt="image"
                  />
                </div>
              ))
          )
        ) : (
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
    </div>
  );
}

export default SearchResults;
