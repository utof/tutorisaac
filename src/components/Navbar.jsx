import YtLogo from "../assets/ytlogo.svg?react";
import HamburgerIcon from "../assets/hamburger.svg?react";
import Magnifier from "../assets/magnifier.svg?react";
import SearchBar from "./SearchBar";
import SearchBarController from "./SearchBarController";

function Navbar({ setIsSideMenuOpen, setSearchText }) {
  return (
    <div id="navbar" style={styles.navbar}>
      <div
        id="hamburger-ytlogo-container"
        style={styles.hamburgerYtLogoContainer}
      >
        <div id="hamburger-container" style={styles.hamburgerContainer}>
          <div
            id="svg-container"
            style={styles.svgContainer}
            onClick={() => {
              setIsSideMenuOpen((prev) => !prev);
            }}
          >
            <HamburgerIcon />
          </div>
        </div>
        <div
          style={{
            ...styles.hamburgerContainer,
            width: "200px",
            marginLeft: "-7px",
          }}
        >
          <div style={styles.svgContainer}>
            <YtLogo />
          </div>
        </div>
      </div>

      <div
        id="search"
        style={{
          width: "500px",
          height: "50px",
          background: "teal",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <SearchBarController setSearchText={setSearchText} />
      </div>

      <div
        style={{
          width: "200px",
          height: "50px",
          background: "indigo",
        }}
      ></div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hamburgerYtLogoContainer: {
    height: "50px",
    background: "orange",
    display: "flex",
    flexDirection: "row",
  },
  hamburgerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    // height: '50px',
  },
  svgContainer: {
    height: "35px",
    // marginLeft: '15px',
    // width: '35px',
    // background: 'blue',
  },
};

export default Navbar;
