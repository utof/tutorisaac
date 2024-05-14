import styles from "./Tiles.module.css";
import Videoyt from "./Videoyt";

function Tile({ videoId, title, channelName, views, date }) {
  return (
    <div className={styles.tile}>
      <Videoyt videoId={videoId} height={styles.tile} width={styles.tile} />
      <div className={styles.title}>{title}</div>
      <div className={styles.channelName}>{channelName}</div>
      {/*  */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.views}>{views}</div>
        <div className={styles.date} style={{ marginLeft: "5px" }}>
          {date}
        </div>
      </div>
    </div>
  );
}

export default Tile;
