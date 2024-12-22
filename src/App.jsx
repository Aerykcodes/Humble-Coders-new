import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./assets/Pages/Home";
import Contact from "./assets/Pages/Contact";
import Registration from "./assets/Pages/Registration";

function App() {
  return (
    <div id="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Home Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path="/" element={<Registration />} /> {/* Registration Page */}
          <Route path="/registration" element={<Registration />} /> {/* Registration Page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
