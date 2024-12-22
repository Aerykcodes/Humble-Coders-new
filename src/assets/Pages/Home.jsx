import React from "react";
import Navbar from "../Navbar/Navbar"; // Import Navbar
import Achievements from "../HomeComponents/Achievements";

export default function Home() {
  return (
    <div className="main-container">
      <Navbar /> {/* Navbar will be shown here */}
      <div className="main-content">
        <br /><br /><br /><br /><br /><br /><br /><br />
       <Achievements/>
      </div>
    </div>
  );
}
