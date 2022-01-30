import React, { useEffect, useRef, useState } from "react";
import "./VideoList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  contentDetailsAction,
  showBackDropAction,
} from "../../../State/action/action";
import ContentModal from "./ContentModal/ContentModal";

import ReactDom from "react-dom";

function VideoList({ title, movieList }) {
  const sliderRef = useRef();
  console.log(movieList, "vl");

  const showBackDrop = useSelector((state) => state.showBackDrop);
  const contentDetails = useSelector((state) => state.contentDetails);
  const dispatch = useDispatch();

  const [links, setLinks] = useState([
    "https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/9042872/pexels-photo-9042872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ]);

  const styleArray = Array.from({ length: links?.length }, (a) => {
    return { opacity: 1 };
  });
  const [styles, setStyles] = useState(styleArray);

  const highlightHandler = (i) => {
    let highlightStyles = JSON.parse(JSON.stringify(styles));
    highlightStyles.forEach((e, index) => {
      if (index === i) {
        e.opacity = "1";
      } else {
        e.opacity = "0.2";
      }
    });
    setStyles(highlightStyles);
  };

  const normalizeHandler = (e) => {
    e.preventDefault();
    let normalStylesArray = Array.from({ length: links?.length }, (a) => {
      return { opacity: 1 };
    });
    setStyles(normalStylesArray);
  };

  const backdropModalHandler = (index) => {
    dispatch(showBackDropAction(true));
    dispatch(contentDetailsAction(movieList[index]));
  };

  useEffect(() => {
    console.log(sliderRef.current);
  });

  useEffect(() => {
    setLinks(
      movieList?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      )
    );
  }, [movieList]);
  console.log("render");
  return (
    <div className="video-list">
      <h2>{title}</h2>

      <div className="video-list__nav">
        <button
          onClick={() => {
            console.log("back button clicked");
            sliderRef?.current.slickPrev();
          }}
        >
          {"<"}
        </button>
        <button onClick={() => sliderRef?.current.slickNext()}>{">"}</button>
      </div>

      <div style={{ width: "100vw" }} className={`video-list__videos`}>
        <Slider
          ref={sliderRef}
          slidesToShow={5}
          slidesToScroll={3}
          arrows={false}
          initialSlide={0}
          showDots={true}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {links?.map((link, index) => {
            return (
              <div className="video-list__images">
                <img
                  src={link}
                  alt="img"
                  className="video-list__image"
                  onMouseEnter={(e) => highlightHandler(index)}
                  style={styles[index]}
                  onMouseLeave={normalizeHandler}
                  onClick={() => backdropModalHandler(index)}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default VideoList;
