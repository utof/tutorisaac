import React from "react";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import styles from "./SideMenu.module.css";

function SidePanelAnimation({ isSideMenuOpen }) {
  const [renderChildren, setRenderChildren] = useState(false);

  useEffect(() => {
    if (isSideMenuOpen) {
      setRenderChildren(true);
    }
  }, [isSideMenuOpen]);

  return (
    <div>
      <div
        className={`${styles.sideMenu} ${
          isSideMenuOpen && styles.sideMenuOpen
        }`}
        onTransitionEnd={() => {
          if (!isSideMenuOpen) setRenderChildren(false);
        }}
      >
        {renderChildren && (
          <SideMenu
            isSideMenuOpen={isSideMenuOpen}
            setRenderChildren={setRenderChildren}
          />
        )}
      </div>
      <div
        className={`${styles.rectangle} ${isSideMenuOpen && styles.open}`}
      ></div>
    </div>
  );
}

export default SidePanelAnimation;
