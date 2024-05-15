import React from "react";
import Tile from "./Tile";
import { css } from "@emotion/css";

function Tiles({ videoList }) {
  return (
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
  );
}
export default Tiles;

const styles = {
  tilesContainer: css`
    background: white;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  `,
};
