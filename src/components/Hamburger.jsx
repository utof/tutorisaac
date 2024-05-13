import { useLocation } from "react-router-dom";
import styles from "./Hamburger.module.css";
import Homebtn from "../assets/homebtn.svg?react";
import Shortsbtn from "../assets/shortsbtn.svg?react";
import Subsbtn from "../assets/subsbtn.svg?react";
import Channelbtn from "../assets/channelbtn.svg?react";

import React from "react";

function Hamburger({ isSideMenuOpen }) {
  //   const location = useLocation(); // TODO highlight the button when at  that page
  //   const pathToButton = {
  //     "/": <Homebtn />,
  //     "/home": <Homebtn />,
  //     "/shorts": <Shortsbtn />,
  //     "/subscriptions": <Subsbtn />,
  //     "/channel": <Channelbtn />,
  //   };
  return (
    <div
      className={`${styles.rectangle} ${
        isSideMenuOpen ? styles.rectangle.open : styles.rectangle.closed
      }`}
    >
      <Option icon={<Homebtn />} text="Home" />
      <Option icon={<Shortsbtn />} text="Shorts" />
      <Option icon={<Subsbtn />} text="Subscriptions" />
      <div
        style={{
          height: "1px",
          width: "100%",
          background: "gray",
          //   border: "30px",
          margin: "20px 0",
        }}
      ></div>
      <Option icon={<Channelbtn />} text="Channel" />
    </div>
  );
}

function Option({ icon, text }) {
  return (
    <div className={styles.option}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default Hamburger;
