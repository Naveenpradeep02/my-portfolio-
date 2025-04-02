import { Fragment, useEffect, useState } from "react";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Cursor from "./components/Cursor";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import PageIntro from "./pages/PageIntro";
import { AnimatePresence } from "framer-motion";
import ProjectDetial from "./pages/ProjectDetial";

function App() {
  const [showIntro, setShowIntro] = useState(
    !sessionStorage.getItem("hasVisited")
  );

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 9000);

      return () => clearTimeout(timer);
    }
  }, [showIntro]);
  return showIntro ? (
    <div>
      <PageIntro />
    </div>
  ) : (
    <Fragment>
      <AnimatePresence>
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projectdetials" element={<ProjectDetial />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
