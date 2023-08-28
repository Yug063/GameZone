import React from "react";
import "./HomePageStyle.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const handleit = () => {
    navigate("/MainMenu");
  };
  return (
    <div className="container">
      <div className="HomePage">
        <div className="left">
          <div className="para">
            <h1>
              Game<span>Zone</span>
            </h1>
            <p>
              This is GamePlay made with efforts to do something Good in Gaming
              Industry
            </p>
          </div>
          <button className="button-52" onClick={() => handleit()}>
            EnterIntoZone <i class="fa-solid fa-right-to-bracket"></i>{" "}
          </button>
        </div>
        <div className="right">
          <img src="../../public/3726585.jpg" alt="this is an image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
