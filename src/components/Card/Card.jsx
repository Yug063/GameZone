import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ number, heading, url }) => {
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <div class="Maincard">
      <img
        src={`../../../public/Rectangle ${number}.png`}
        alt="this is an image"
      />
      <div class="layer">
        <h3 className="title">{heading}</h3>
        <button class="button-8" onClick={() => handleClick(url)}>
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Card;
