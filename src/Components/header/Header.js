import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import Avatar from "@mui/material/Avatar";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  loadingAction,
  searchInputAction,
  searchListAction,
} from "../../State/action/action";
import { Link } from "react-router-dom";
import { searchApiCall } from "../../API/searchApiCall";

const API_KEY = `813f004417e46fdc21b11b2dbcd0d00c`;

function Header() {
  const searchStyle = {
    width: `200px`,
    background: `#fffefe`,
  };

  const [focus, setFocus] = useState(false);

  const searchInput = useSelector((state) => state.searchInput);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const dom = document.querySelector(".header_header__3UcXJ");
      if (window.pageYOffset < 14) {
        dom.style.backgroundColor = "transparent";
      } else {
        dom.style.backgroundColor = "#141414";
      }
    });
  });

  useEffect(() => {
    let timerId;
    timerId = setTimeout(() => {
      if (searchInput.length > 0) {
        dispatch(loadingAction(true, "SET_SEARCHLIST_LOADING"));
        searchApiCall(searchInput, dispatch)
        // fetch(
        //   `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}`
        // )
        //   .then((resp) => resp.json())
        //   .then((data) => {
        //     dispatch(loadingAction(false));
        //     dispatch(searchListAction(data.results));
        //   });
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchInput]);

  const focusHandler = (e) => {
    e.preventDefault();
    setFocus(true);
  };

  const blurHandler = (e) => {
    e.preventDefault();
    // navigate("/");
    dispatch(searchInputAction(""));
    setFocus(false);
  };
  const searchInputHandler = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch(searchInputAction(e.target.value));
  };
  const loginHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <div className={classes.parent}>
      <div className={classes.header}>
        <div className={classes.left}>
          <Link to="/">
            <img
              src="https://netflix-clone-9a0b9.firebaseapp.com/f4070143e1f521da82a119eb78b434d0.png"
              alt="logo"
            />
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className={classes.home}>Home</div>
          </Link>
          <Link to="/series" style={{ textDecoration: "none", color: "white" }}>
            <div className={classes.series_films}>Series</div>
          </Link>
          <Link to="/films" style={{ textDecoration: "none", color: "white" }}>
            <div className={classes.series_films}>Films</div>
          </Link>
          <Link to="/series" style={{ textDecoration: "none", color: "white" }}>
            <div>New&Popular</div>
          </Link>
          <Link to="/series" style={{ textDecoration: "none", color: "white" }}>
            <div>My List</div>
          </Link>
        </div>
        <div className={classes.right}>
          <div className={classes.searchItem}>
            <input
              type="text"
              onChange={searchInputHandler}
              onFocus={focusHandler}
              onBlur={blurHandler}
              style={focus ? searchStyle : null}
              value={searchInput}
            ></input>
            <BiSearch className={classes.search} />
          </div>
          <CircleNotificationsIcon
            className={classes.notification}
            style={{ fontSize: "40px" }}
          />
          <Avatar>H</Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header;
