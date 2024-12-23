import React from "react";
import Navbar from "../Navbar/Navbar";
import './registration.css';
import ContentSection from "../Content/ContentSection";
import Accordion from "../Content/Accordion";
import RegisterButton from "../Content/RegisterButton";

export default function Registration() {
  return (
    <>
      <div className="main-container-Register">
        <Navbar />
        <br /><br /><br />
        <ContentSection />
        <Accordion
          title="Day 1 : Introduction"
          content="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum magna aliqua veniam ut aliquip ex commodo consequat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa laboris nisi ut aliquip consequat tempor dolore incididunt veniam nulla pariatur ex"
        />
        <br />
        <Accordion
          title="Day 2 : "
          content="React works by creating a virtual DOM to efficiently update the real DOM when the state of a component changes."
        /><br/>
        <Accordion
          title="Day 3:"
          content="A component is a reusable building block in React that returns JSX code to render on the screen."
        />
        <br />
        <RegisterButton />
      </div>
    </>
  );
}
