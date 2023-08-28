import React from "react";
import MainMenu from "./components/MainMenu/MainMenu";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicTacToe from "./Games/TicTac/TicToeToe";
import AngryBirdMatch from "./Games/AngryBird/AngryBirdMatch.jsx"
import PuzzleGame from "./Games/PuzzleGame/PuzzleGame";
import GamePlay from "./Games/DiceGame/GamePlay";
const App = () => {
  // const [isGameStarted, setIsGameStarted] = useState(false);

  // const toggleGamePlay = () => {
  //   setIsGameStarted((prev) => !prev);
  // };
  return (
    <div>
      <BrowserRouter>
      {/* {isGameStarted ? <MainMenu /> : <HomePage toggle={toggleGamePlay} />} */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/MainMenu" element={<MainMenu></MainMenu>}></Route>
        <Route path="/TicTacToe" element={<TicTacToe></TicTacToe>}></Route>
        <Route path="/AngryBirdMatch" element={<AngryBirdMatch></AngryBirdMatch>}></Route> 
        <Route path="/PuzzleGame" element={<PuzzleGame></PuzzleGame>}></Route>
        <Route path="/DungeonDice" element={<GamePlay></GamePlay>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

/*


 */
