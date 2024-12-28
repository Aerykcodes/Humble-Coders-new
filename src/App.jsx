import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './assets/Pages/Content/Content'
import Home from "./assets/Pages/Home/Home";
import About from "./assets/Pages/About/About";
import Registration from "./assets/Pages/Registration/Registration";
import Contact from "./assets/Pages/Contact/Contact"

function App() {
  return (
    <div id="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/content" element={<Content />} /> {/* Content Page */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
