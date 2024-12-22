import React from "react";
import Navbar from "../Navbar/Navbar";
import './registration.css';
import ContentSection from "../RegisterContent/ContentSection";
import Accordion from "../RegisterContent/Accordion";

export default function Registration() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <br /><br /><br />
        <ContentSection />

        {/* Accordion components with title and content passed directly */}
        <Accordion
          title="Day 1 : Introduction"
          content="React is a JavaScript library for building user interfaces. It lets you create reusable UI components.njsniokdowjfskmdljroqlpqwkrowknegjewjskdjgfjdksal;dofiujcnms,lw;edpfoiudhswenjrmlhpgfoidshygwbehgtklpofiduswhyedbrfmkh;gpofidushdbfmgkl;fodisuhasghbedbrfmgtl,h;pgofiudygwebhrjmkgtlfkdjs >"
        />
        <Accordion
          title="Day 2 : "
          content="React works by creating a virtual DOM to efficiently update the real DOM when the state of a component changes."
        />
        <Accordion
          title="Day 3:"
          content="A component is a reusable building block in React that returns JSX code to render on the screen."
        />
       
      </div>
    </>
  );
}
