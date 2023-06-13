import { useEffect } from "react";
import React from "react";
import Praying from "./Praying";
import { useNavigate } from "react-router-dom";

const CallingLord = (props) => {
  const {
    count,
    allCount,
    isCompleted,
    handlePause,
    setIsCompleted,
    setCount,
    handlingExit,
    setRemainingDuration,
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    let total_duration =
      allCount.callingLordCount +
      allCount.prayingCount +
      allCount.readingCount +
      allCount.confessionCount +
      allCount.consecrationCount +
      allCount.thanksgivingCount +
      allCount.petitionCount;
    console.log(total_duration);
    const remaining_minutes = Math.floor(total_duration / 60);

    console.log(remaining_minutes);
    setRemainingDuration(remaining_minutes);
  }, []);
  const handleReset = () => {
    setCount({ callingLord: 30 });
    setIsCompleted(false);
  };

  if (props.count === 0) {
    navigate("/praying");
    // setIsCompleted(true);
  }

  return (
    <div>
      {!isCompleted ? (
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>Calling on the Name of the Lord</h1>
              <p>
                Calling on the Name of the Lord to set our mind on the spirit-1
                Cor.12:3;Rom.8:6; 10:12-13
              </p>
            </div>

            <div>
              <h4 className="count">{count}</h4>
            </div>

            <div>
              <div className="home-buttons">
                <button onClick={handleReset}>Back</button>
                <button onClick={handlePause}>
                  {props.isPaused ? "Continue" : "Pause"}
                </button>
                <button className="exit" onClick={handlingExit}>
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        isCompleted && <Praying />
      )}
      <div />
    </div>
  );
};

export default CallingLord;

// Exit code
