import React, { useEffect, useState } from "react";
import Header from "../Header";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import "./HeaderResults.css"
import { useDispatch, useSelector } from "react-redux";
import { seriesAction, seriesGenresAction } from "../../../State/action/action";
import { genreApiCall } from "../../../API/genreApiCall";
import { dataApiCall } from "../../../API/dataApiCall";
import Categories from "../../../Components/Body/VideoList/Categories"

const API_KEY = `813f004417e46fdc21b11b2dbcd0d00c`

function HeaderResults() {

  const series = useSelector(state => state.series);
  const seriesGenre = useSelector(state => state.seriesGenre)
  const dispatch = useDispatch();

  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownHandler = () => {
    setShowDropDown(true);
  }

  const genreClickHandler = () => {
    setShowDropDown(false);
  }

  // useEffect(() => {
  //   // fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`).then(resp => resp.json()).then(data => {
  //   //   dispatch(seriesGenresAction(data.genres))
  //   // })
  //   genreApiCall(dispatch, "seriesAction")
  // }, [seriesGenre])

  // useEffect(() => {
  //   const urls = [];
  //   dataApiCall(seriesGenre.slice(0, 9), dispatch, "seriesAction")
  //   // seriesGenre.slice(0, 9).forEach(sg => {
  //   //   urls.push(fetch(`https://api.themoviedb.org/3/discover/tv?api_key=813f004417e46fdc21b11b2dbcd0d00c&language=en-US&with_genres=${sg.id}`))
  //   // })
  //   // Promise.all(urls).then(resp => resp.forEach(r => r.json().then(data => dispatch(seriesAction()))))
  // }, [series])
   
  return (
    <div>
      <div className="header-results__header">
        <Header />
      </div>
      <div className="header-results__genres">
        <button onClick={dropDownHandler}><span>Genres</span><ArrowDropDownCircleIcon /></button>
      </div>
      {
        showDropDown ? <div className="header-results__genres_modal">{seriesGenre?.map(sg => <button onClick={genreClickHandler}>{sg.name}</button>)}</div> : null
      }
      <div className="header-results__result">
        <Categories type="seriesAction" genre={seriesGenre}/>
      </div>
    </div>
  );
}

export default HeaderResults;