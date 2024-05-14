import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SideMenu.module.css";
import Homebtn from "../assets/homebtn.svg?react";
import Shortsbtn from "../assets/shortsbtn.svg?react";
import Subsbtn from "../assets/subsbtn.svg?react";
import Channelbtn from "../assets/channelbtn.svg?react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

function SideMenu() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log("ctxvaluie", theme);
  });
  return (
    <>
      {/* <div
          className={`${styles.sideMenu} ${
            isSideMenuOpen && styles.sideMenuOpen
          }`}
          onTransitionEnd={() => {
            if (!isSideMenuOpen) setRenderChildren(false);
          }}
        > */}
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
      <div
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme}
      </div>
      {/* </div> */}
    </>
  );
}

function Option({ icon, text }) {
  const navigate = useNavigate();
  const currentPath = useLocation();
  const isHighlighted = currentPath.pathname.includes(text.toLowerCase());

  const handleClick = () => {
    const newPath = `/${text.toLowerCase()}`;
    // window.location.href = newPath;
    navigate(newPath);
  };

  return (
    <div
      className={`${styles.option} ${isHighlighted ? styles.highlighted : ""}`}
      onClick={handleClick}
    >
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

const buttonOptions = {
  home: {
    text: ["alksdjfhlaksjdhf", "home"],
    route: "/home",
  },
};

export default SideMenu;

// function useCurrentPath() {
//   const context = useContext(CurrentPathContext);
//   if (!context) {
//     throw new Error("useCurrentPath must be used within a CurrentPathProvider");
//   }
//   return context;
// }

// const CurrentPathContext = createContext();
// function CurrentPathProvider({ children }) {
//   const location = useLocation();
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   return (
//     <CurrentPathContext.Provider value={{ isDarkMode, setIsDarkMode }}>
//       {children}
//     </CurrentPathContext.Provider>
//   );
// }
