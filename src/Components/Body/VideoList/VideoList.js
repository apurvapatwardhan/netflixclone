import React, { useEffect, useRef, useState } from "react";
import "./VideoList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";

function VideoList({ title, movieList }) {
  const sliderRef = useRef();

  console.log(movieList, "vl")

  const [links, setLinks] = useState([
    "https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/9042872/pexels-photo-9042872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ]);

  console.log(sliderRef?.current);

  useEffect(() => {
    console.log(sliderRef.current);
  });

  useEffect(() => {
      setLinks(
        movieList?.map(
          (movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        )
      );
  },[movieList]);
  console.log("render");
  return (
    <div className="video-list">
      <h2>{title}</h2>
      <div className="video-list__nav">
        <button onClick={() => sliderRef?.current.slickPrev()}>{"<"}</button>
        <button onClick={() => sliderRef?.current.slickNext()}>{">"}</button>
      </div>
      <div style={{ width: "100vw" }}>
        <Slider
          ref={sliderRef}
          slidesToShow={5}
          slidesToScroll={2}
          arrows={false}
          initialSlide={0}
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
                slidesToShow: 1,
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
          {links?.map((link) => {
            return (
              <div>
                <img src={link} alt="img" className="video-list__image" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default VideoList;

{
  /* <h2>Category</h2>
        <Slider {...settings} >
          {links.map((link) => {
            return (
              <div>
                <img className="video-list__image" src={link} alt="imag" />
              </div>
            );
          })}
        </Slider> */
}
