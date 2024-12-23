import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : <FontAwesomeIcon icon={faArrowDown} />}</span>
      </div>
      <div
        className={`accordion-content ${isOpen ? "open" : "closed"}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
