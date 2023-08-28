import React from 'react'
import { styled } from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className='text'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
                after click on dice if selected number is equal to dice number you will gets points equal to number selected
            </p>
            <p>
                else score of -2 have been deducted
            </p>
        </div>
    </RulesContainer>
  )
}

export default Rules;
const RulesContainer = styled.div`
    background-color: #e3b86e96;
    padding: 8px;
    max-width: 800px;
    margin: 10px auto;
    height: fit-content;
    font-weight: bold;
    border-radius: 10px;
    h2{
        font-size: 24px;
        text-align: center;
        color:  #6f1d1b;
    }
    .text{
        margin-top: 14px;
        text-align: start;
    }
    .text p{
        margin: 0;
        color:  #6f1d1b;
    }
`