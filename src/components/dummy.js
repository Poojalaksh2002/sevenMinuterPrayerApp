import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Reading from "./Reading";

const dummy = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(60);
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const Counter = () => {
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
    return (
      <div>
        {!isCompleted ? (
          <div>
            <div>
              <h1>Praying</h1>
              <p></p>
            </div>
            <Counter />
            <div>
              <div>{count}</div>
              <button onClick={() => navigate("/")}>Back</button>
              <button onClick={handlePause}>
                {isPaused ? "Continue" : "Pause"}
              </button>
              <button>Exit</button>
            </div>
          </div>
        ) : (
          <Reading />
        )}
      </div>
    );
  };
};
export default dummy;
