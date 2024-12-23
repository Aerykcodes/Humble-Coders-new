import React from "react";
import HomeCard from "./CardR/HomeCard";
import NewCard from "./Card2/NewCard";
import ThirdCard from "./Card3/ThirdCard";
import './Achievements.css'

const Achievements = () => {
    return (
      <>
      <br /><br />
      <h2 className="achievements-heading">OUR ACHIEVEMENTS</h2>
        <HomeCard/>
       <NewCard/>
       <ThirdCard/>
      </>
    );
  }
  
  export default Achievements;