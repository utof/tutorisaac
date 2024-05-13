import React, { useEffect } from "react";
import styles from "./Tiles.module.css";
import Hamburger from "./Hamburger";

function Tile({ children }) {
  return <div className={styles.tile}>{children}</div>;
}

function Tiles({ isSideMenuOpen }) {
  const tileData = [
    "Tile 1",
    "Tile 2",
    "Tile 3",
    "Tile 4",
    "Tile 5",
    "Tile 6",
    "Tile 7", // TODO stretches too much
  ]; // Array of tile data

  return (
    <div id="whole-thing" style={{ display: "flex", alignItems: "flex-start" }}>
      <div id="hamburger-tile">
        {isSideMenuOpen ? <Hamburger isSideMenuOpen={isSideMenuOpen} /> : null}
      </div>
      <div
        id="tiles"
        className={`${styles.baba} ${isSideMenuOpen && styles.clicked}`}
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            background: "white",
            marginBottom: "10px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {tileData.map((tile, index) => (
            <Tile key={index}>{tile}</Tile>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Tiles;
