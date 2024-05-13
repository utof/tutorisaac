import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tiles from "./components/Tiles";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const MainContent = // TODO i couldnt put the <> and </> inline, had to create a component, fix? // TODO when to use redirect/navigate?
    (
      <>
        <Navbar setIsSideMenuOpen={setIsSideMenuOpen} />
        <Tiles isSideMenuOpen={isSideMenuOpen} />
      </>
    );
  return (
    // howto If path = home OR / then maincontent. And if home then redirect to /
    <Router>
      <Routes>
        <Route path="/home" element={MainContent} />
        <Route path="/" element={MainContent} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </Router>
  );
}

export default App;
