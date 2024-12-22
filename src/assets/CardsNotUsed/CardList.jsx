import React from "react";
import "./CardList.css"; // Make sure your CSS file is correctly linked

const CardList = () => {
  return (
    <div className="card-list">
      {/* Repeat this block for each card */}
      {cardItems.map((item, index) => (
        <div className="card" key={index}>
          <img
            className="card__img"
            src={item.imgSrc}
            alt="card-item"
          />
          <div className="card__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="card__details--title">{item.title}</h5>
            <h6 className="card__details--subtitle">{item.subtitle}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

// Data for cards (you can replace this with dynamic data if needed)
const cardItems = [
  {
    imgSrc:
      "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Descriptive Title",
    subtitle: "Date and Duration",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Descriptive Title",
    subtitle: "Date and Duration",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Descriptive Title",
    subtitle: "Date and Duration",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Descriptive Title",
    subtitle: "Date and Duration",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Descriptive Title",
    subtitle: "Date and Duration",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Descriptive Title",
    subtitle: "Date and Duration",
  },
];

export default CardList;
