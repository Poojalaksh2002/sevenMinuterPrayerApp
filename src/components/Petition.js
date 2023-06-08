
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import End from "./End";

const Petition = () => {
  const initalDuration = 60;
  const navigate = useNavigate();
  const [count, setCount] = useState(initalDuration);
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isPaused && count >= 0) setCount((prevCount) => prevCount - 1);
    }, 1000);
    if (count === 0) {
      setIsCompleted(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [count, isPaused]);

  const handlePause = () => {
    setIsPaused((prevPause) => !prevPause);
  };
  const handleReset = () => {
    setIsCompleted(false);
    navigate("/thanksgiving");
  };
  const handleExist = () => {
    const remainingDuration = Math.floor(initalDuration / 60);
    alert(
      `[Jesus] said...'So were you not able to watch with Me for [${remainingDuration} more minutes]? Watch and pray that you may not enter into temptation.The spirit is willing, but the flesh is weak.'(Matt.26:40b-41)`
    );
  };

  return (
    <div>
      {!isCompleted ? (
        <div>
          <div>
            <h1>Petition</h1>
            <p>
              Asking the Lord for needs,growth and persons that need salvation -
              1 Tim.2:1:Eph.6:18;Matt.7:7; Psa.143:8
            </p>
          </div>
          <div>
            <div>{count}</div>
            <button onClick={handleReset}>Back</button>
            <button onClick={handlePause}>
              {isPaused ? "Continue" : "Pause"}
            </button>
            <button onClick={handleExist}>Exit</button>
          </div>
        </div>
      ) : (
        <End />
      )}
    </div>
  );
};

export default Petition;

