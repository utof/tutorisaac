import React from "react";
import Tile from "./Tile";

function Tiles({ videoList }) {
  return (
    <div style={styles.tilesContainer}>
      {videoList.map((video, index) => (
        <Tile
          videoId={video.videoId}
          key={index}
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          date={video.date}
        />
      ))}
    </div>
  );
}
export default Tiles;

const styles = {
  tilesContainer: {
    background: "white",
    marginBottom: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    flexWrap: "wrap",
  },
};
