import styles from "./Tiles.module.css";
import Videoyt from "./Videoyt";

function Tile({ videoId, title, channelName, views, date, thumbnail }) {
  return (
    <div className={styles.tile}>
      <Videoyt videoId={videoId} thumbnail={thumbnail} />
      <div className={styles.title}>{title}</div>
      <div className={styles.channelName}>{channelName}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.views}>{views}</div>
        <div className={styles.date} style={{}}>
          {date}
        </div>
      </div>
    </div>
  );
}

export default Tile;
