import React from "react";
import "./SingleCardStyles.css";
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="../../public/angryBirdsMatchimg/cover.png"
          onClick={handleClick}
          alt="cover back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
