import React from 'react'
import "./NewGamePuzzleStyles.css"
const NewGamePuzzle = ({reset}) => {
  return (
    <div className='button-wrapper'>
        <button className="Puzzlebtn" onClick={reset}>New Game</button>
    </div>
  )
}

export default NewGamePuzzle