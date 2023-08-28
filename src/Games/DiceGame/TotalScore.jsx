import React from 'react'
import { styled } from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    
    h1{
        font-size: 100px;
        line-height: 100px;
        margin-bottom: 0px;
        color: #6f1d1b;
    }
    p{  
        margin-top: 0px;
        font-size: 24px;
        font-weight: 700;
        color: #6f1d1b;
    }
`