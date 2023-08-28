import React from 'react'
import "./ResetButtonStyles.css"
const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset-btn' onClick={resetBoard}>ResetBoard</button>
  )
}

export default ResetButton