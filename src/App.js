import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/home" element={<Home />} />*/}
            {/*<Route path="/about" element={<About />} />*/}
            {/*<Route path="/projects" element={<Projects />} />*/}
            {/*<Route path="/projects/:id" element={<Project />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
            {/*<Route path="*" element={<Error404 />} />*/}
        </Routes>
    </Router>
  );
}

export default App;
