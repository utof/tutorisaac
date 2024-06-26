import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SidePanelAnimation from "./components/SidePanelAnimation";
import YoutubeSearchController from "./components/YoutubeSearchController";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  function withComponents(Component, showNavbar = true, showSidePanel = true) {
    return (
      <>
        {showNavbar && (
          <Navbar
            setSearchText={setSearchText}
            setIsSideMenuOpen={setIsSideMenuOpen}
          />
        )}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {showSidePanel && (
            <SidePanelAnimation isSideMenuOpen={isSideMenuOpen} />
          )}
          {Component}
        </div>
      </>
    );
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={withComponents(
            <YoutubeSearchController searchText={searchText} />
          )}
        />
        <Route
          path="/"
          element={withComponents(
            <YoutubeSearchController searchText={searchText} />
          )}
        />
        <Route path="/shorts" element={withComponents(<>Shorts</>)} />
        <Route path="/subscriptions" element={<>Subscriptions</>} />
        <Route path="/channel" element={<>Channel</>} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </Router>
  );
}

export default App;
