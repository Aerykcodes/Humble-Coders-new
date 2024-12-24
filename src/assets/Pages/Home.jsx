import React from "react";
import Navbar from "../Navbar/Navbar"; // Import Navbar
import HomeFirst from "../HomeComponents/HomeFirst";
import Achievements from "../HomeComponents/Achievements";
import './Home.css'
import WorkshopSection from "../HomeComponents/WorkshopSection";
import SiteFooter from "../SiteFooter/SiteFooter"

export default function Home() {
  return (
    <>
    <div className="main-container-Home">
      <Navbar /> {/* Navbar will be shown here */}
      <div className="main-content">
        <br /><br /><br /><br /><br /><br />
       <HomeFirst/>
       <Achievements/>
       <WorkshopSection/>
      </div>
    </div>
    <SiteFooter/>
    </>
  );
}
