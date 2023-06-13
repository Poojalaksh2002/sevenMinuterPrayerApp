import { useNavigate } from "react-router-dom";
import Petition from "./Petition";
import React, { useEffect } from "react";

const ThanksGiving = (props) => {
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
    const total_duration =
      props.allCount.thanksgivingCount + props.allCount.petitionCount;
    console.log(total_duration);
    const remaining_minutes = (total_duration / 60).toFixed(1);

    // const remaining_minutes = Math.floor(total_duration / 60);
    console.log(remaining_minutes);
    setRemainingDuration(remaining_minutes);
  }, []);

  const handleReset = () => {
    setIsCompleted(false);
    navigate("/consecration");
  };
  if (count === 0) {
    navigate("/petition");
    // setIsCompleted(true);
  }

  return (
    <div>
      {!isCompleted ? (
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>ThanksGiving</h1>
              <p>
                Giving thanks for all things; for all the persons, situations
                and things in your life and praising Him -Eph.5:20; 1 Thes.5:18
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
      ) : (
        <Petition />
      )}
      <div />
    </div>
  );
};

export default ThanksGiving;
