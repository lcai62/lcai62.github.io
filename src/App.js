import React from "react";
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";
import Particles from "./pages/Particles";

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/0" element={<Particles />} />
            {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
    </HashRouter>
  );
}

export default App;
