import React from "react";
import Tile from "./Tile";
import { css } from "@emotion/css";

function Tiles({ videoList }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#282828",
      }}
    >
      <div className={styles.tilesContainer}>
        {videoList.map((video, index) => (
          <Tile
            videoId={video.videoId}
            key={index}
            title={video.title}
            channelName={video.channelName}
            views={video.views}
            date={video.date}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default Tiles;

const styles = {
  tilesContainer: css`
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 10px; /* Added padding to center content */
    box-sizing: border-box;
  `,
};
