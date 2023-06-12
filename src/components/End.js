import { useNavigate } from "react-router-dom";
import React from "react";

const End = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="text-container">
        <div className="flex-container">
          <div>
            <h1>End</h1>
          </div>

          <div>
            <h1>Hallelujah</h1>
          </div>

          <div>
            <div className="home-buttons">
              <button onClick={handleRestart}>RESTART</button>
              <button className="exit">EXIT</button>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
export default End;
