import React from "react";
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/home" element={<Home />} />*/}
            {/*<Route path="/about" element={<About />} />*/}
            <Route path="/projects" element={<Projects />} />
            {/*<Route path="/projects/:id" element={<Project />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
            {/*<Route path="*" element={<Error404 />} />*/}
        </Routes>
    </HashRouter>
  );
}

export default App;
