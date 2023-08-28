import React from "react";
import { styled } from "styled-components";

const RollDice = ({currentDice,roleDice}) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`../../../public/DiceGameimg/dice_${currentDice}.png`} alt="this is dice-1 image" />
      </div>
      <p className="cont">Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
  .dice img{
    height: 180px;
  }
  .cont {
    font-size: 24px;
    font-weight: 600;
    height: 10px;
    color: #6f1d1b;
  }
`;
