import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button } from "./Button.jsx";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [Error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    const randomNum = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNum);
    if (!selectedNumber) {
      setError("You have not selected any Number");
      return;
    } else {
      setError(undefined);
    }
    if (selectedNumber === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          Error={Error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice}></RollDice>
      <div className="btns">
        <Button onClick={resetScore}>Reset Button</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules></Rules>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 0px;
  background-color: #ffe6a7;
  height: 100vh;
  .top_section {
    height: 160px;
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;
