import React, { useRef } from "react";
import classes from "./Body.module.css";
import MainVideo from "./MainVideo/MainVideo";
import VideoList from "./VideoList/VideoList";
const Body = () => {
  const bodyRef = useRef();
  return (
    <div ref={bodyRef}>
      <MainVideo reference = {bodyRef}/>
    </div>
  );
};
export default Body;
