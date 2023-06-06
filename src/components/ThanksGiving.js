import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Petition from "./Petition";

const ThanksGiving = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(30);
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
    navigate("/consecration");
  };

  return (
    <div>
      {!isCompleted ? (
        <div>
          <div>
            <h1>ThanksGiving</h1>
            <p>
              Using our exercised spirit to pray over a verse or two. Turning
              the verses into a personal prayer - Eph.6:17-18;2 Tim.3:16
            </p>
          </div>
          <div>
            <div>{count}</div>
            <button onClick={handleReset}>Back</button>
            <button onClick={handlePause}>
              {isPaused ? "Continue" : "Pause"}
            </button>
            <button>Exit</button>
          </div>
        </div>
      ) : (
        <Petition />
      )}
    </div>
  );
};

export default ThanksGiving;
