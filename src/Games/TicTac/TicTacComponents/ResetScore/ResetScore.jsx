import React from 'react'
import "./ResetScoreStyles.css"
const ResetScore = ({resetScore}) => {
  return (
    <button className='resetScore-btn' onClick={resetScore}>Reset Score</button>
  )
}

export default ResetScore