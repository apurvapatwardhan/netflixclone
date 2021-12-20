import React, { useRef } from "react";
import "./MainVideo.css";
import HoverVideoPlayer from "react-hover-video-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import { height } from "@mui/system";
import VideoList from "../VideoList/VideoList";

function MainVideo({ reference }) {
  const ref1 = useRef();
  return (
    <div>
      <div className="main-video">
        <HoverVideoPlayer
          videoSrc="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=172&oauth2_token_id=57447761"
          volume={0.5}
          pausedOverlay={
            <img
              src="https://images.pexels.com/photos/9961345/pexels-photo-9961345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxHeight: "100px",
              }}
            />
          }
          videoClassName="player-video"
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
          hoverTarget={reference}
        />
      </div>
      <div className="video-desc" ref={ref1}>
        <div className="desc">
          This vidoe is the main video of the netflix clone please wathc it
          agdgfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </div>
        <div className="btns">
          <button className="play">
            <div>
              <PlayArrowIcon className="white" />
            </div>{" "}
            <div>Play</div>
          </button>
          <button className="more-info">
            <div>
              <InfoIcon className="gray" />
            </div>{" "}
            <div>More info</div>
          </button>
        </div>
      </div>
      );
    </div>
  );
}

export default MainVideo;
