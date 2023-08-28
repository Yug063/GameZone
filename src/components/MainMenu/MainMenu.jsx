import React from 'react'
import "./MainMenu.css"
import Card from '../Card/Card'
// import TicTacToe from '../../Games/TicTacToe/TicTacToe'
const MainMenu = () => {
  return (
    <div className="MainMenu">
        <div className="heading">
            Game <span> Zone </span>
        </div>
        <div className="content">
            <Card number={1} heading={"Tic-Tac-Toe"} url={"/TicTacToe"}></Card>
            <Card number={2} heading={"AngryBird Match"} url={"/AngryBirdMatch"}></Card>
            <Card number={3} heading={"Dungeon-Dice"} url={"/DungeonDice"}></Card>
            <Card number={4} heading={"15-Puzzle"} url={"/PuzzleGame"}></Card>
        </div>
        <footer>All rights are reserved to Yug Tyagi 💖</footer>
    </div>
  )
}

export default MainMenu