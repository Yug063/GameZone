import React, { useState, useEffect } from "react";
import "./AngryBirdMatchStyles.css";
import SingleCard from "./AngryBirdComponents/SingleCard.jsx";
const cardImages = [
  {
    src: "../public/angryBirdsMatchimg/blue angry bird new.png",
    matched: false,
  },
  {
    src: "../public/angryBirdsMatchimg/yellow angry bird new.png",
    matched: false,
  },
  {
    src: "../public/angryBirdsMatchimg/green angry bird new.png",
    matched: false,
  },
  {
    src: "../public/angryBirdsMatchimg/eagle angry bird new.png",
    matched: false,
  },
  {
    src: "../public/angryBirdsMatchimg/Matilda_Classic.png",
    matched: false,
  },
  {
    src: "../public/angryBirdsMatchimg/diff angry bird.png",
    matched: false,
  },
];
const AngryBirdMatch = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setchoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceTwo(null);
    setchoiceOne(null);
    setCards(shuffledCards);
    setTurns(0);
  };
  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setchoiceOne(card);
    // if choiceOne have value the setChoiceTwo will work else setChoiceOne will work
    // setChoice stored all values of selected card we can see it through by console on it
  };

  // automatically start the game
  useEffect(() => {
    shuffleCards();
  }, []);
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
    }
    if (choiceOne && choiceTwo) {
      if (choiceOne.src == choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  // reset choices and increase turn
  const resetTurn = () => {
    setDisabled(false);
    setchoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    // Check if all cards have been matched to mark the game as completed
    const allCardsMatched = cards.every((card) => card.matched);
    if (allCardsMatched) {
      window.alert(
        `Congratulations! You completed the game in ${turns} turns.`
      );
    }
  };
  //
  return (
    <div className="angry">
      <div className="AngryBirdMatch">
        <h1 className="angryHeading">AngryBirds Match</h1>
        <button className="angrybtn" onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            ></SingleCard>
          ))}
        </div>
        <p className="turnsct">Turns : {turns}</p>
      </div>
    </div>
  );
};

export default AngryBirdMatch;
