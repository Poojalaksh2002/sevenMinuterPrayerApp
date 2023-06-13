import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import Confession from "./Confession";

const Reading = (props) => {
  console.log(props);

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
    const totalDurationReading =
      allCount.readingCount +
      allCount.confessionCount +
      allCount.consecrationCount +
      allCount.thanksgivingCount +
      allCount.petitionCount;
    console.log(totalDurationReading);
    console.log(props.allCount.readingCount);
    // const remaining_minutes = Math.floor(total_duration / 60);
    const remaining_minutes = (totalDurationReading / 60).toFixed(1);

    console.log(remaining_minutes);
    setRemainingDuration(remaining_minutes);
  }, []);

  const handleReset = () => {
    setIsCompleted(false);
    navigate("/praying");
  };
  // if (count === 0 || setIsCompleted(true)) {
  //   navigate("/confession");
  // }

  if (count === 0) {
    navigate("/confession");
    // setIsCompleted(true);
  }

  return (
    <div>
      {!isCompleted ? (
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>Pray-reading</h1>
              <p>
                Using our exercised spirit to pray over a verse or two. Turning
                the verses into a personal prayer - Eph.6:17-18;2 Tim.3:16
              </p>
            </div>

            <div>
              <h4 className="count">{props.count}</h4>
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
      ) : (
        <Confession />
      )}
      <div />
    </div>
  );
};

export default Reading;
