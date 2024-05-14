import React from "react";
import YouTube from "react-youtube";

function Videoyt({ videoId, height, width, autoplay = 0 }) {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: autoplay,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default Videoyt;
