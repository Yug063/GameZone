import React, { useState } from "react";
import { styled } from "styled-components";

const NumberSelector = ({selectedNumber,setSelectedNumber,Error}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <p className="error">{Error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p{
    margin-top: 0px;
    font-size: 24px;
    font-weight: 700;
    text-align: end;
    color:#6f1d1b;
  }
  .error{
    margin-bottom: 0px;
    color: #d00000;

  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid #6f1d1b;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#6f1d1b" : "#bb9457")};
  color: ${(props) => (!props.isSelected ? "#6f1d1b" : "white")};
  cursor: pointer;
`;
