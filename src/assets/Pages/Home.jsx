import React from "react";
import Navbar from "../Navbar/Navbar"; // Import Navbar
import Achievements from "../HomeComponents/Achievements";
import HomeCard from "../HomeComponents/CardR/HomeCard";
import NewCard from "../HomeComponents/Card2/NewCard";
import ThirdCard from "../HomeComponents/Card3/ThirdCard";

export default function Home() {
  return (
    <div className="main-container">
      <Navbar /> {/* Navbar will be shown here */}
      <div className="main-content">
        <br /><br /><br /><br /><br /><br />
       <Achievements/>
       <HomeCard/>
       <NewCard/>
       <ThirdCard/>
      </div>
    </div>
  );
}
