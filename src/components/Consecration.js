import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThanksGiving from "./ThanksGiving";

const Consecration = (props) => {
  const navigate = useNavigate();
  const {
    handlingExit,
    allCount,
    setRemainingDuration,
    count,
    isPaused,
    isCompleted,
    handlePause,
    setIsCompleted,
  } = props;
  useEffect(() => {
    if (props.count === 1) {
      navigate("/thanksgiving");
      setIsCompleted(true);
    }
  }, [count]);
  useEffect(() => {
    const total_duration =
      allCount.consecration + allCount.thanksgiving + allCount.petition;
    console.log(total_duration);
    const remaining_minutes = Math.floor(total_duration / 60);
    // const remaining_minutes = (total_duration / 60).toFixed(1);

    console.log(remaining_minutes);
    setRemainingDuration(remaining_minutes);
  }, []);

  const handleReset = () => {
    setIsCompleted(false);
    navigate("/confession");
  };

  return (
    <div>
      {!isCompleted && (
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>Consecration</h1>
              <p>
                Presenting ourselves to the Lord afresh, giving Him the full
                ground in us - Rom.12:1-2; 6:13,19; Mark 12:30
              </p>
            </div>

            <div>
              <h4 className="count">{count}</h4>
            </div>

            <div>
              <div className="home-buttons">
                <button onClick={handleReset}>Back</button>
                <button onClick={handlePause}>
                  {isPaused ? "Continue" : "Pause"}
                </button>
                <button className="exit" onClick={handlingExit}>
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCompleted && <ThanksGiving />}
      <div />
    </div>
  );
};

export default Consecration;
