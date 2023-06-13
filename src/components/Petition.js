import { useNavigate } from "react-router-dom";
import End from "./End";
import React, { useEffect } from "react";

const Petition = (props) => {
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
    const total_duration = allCount.petitionCount;
    console.log(total_duration);
    const remaining_minutes = Math.floor(total_duration / 60);
    // const remaining_minutes = (total_duration / 60).toFixed(1);

    console.log(remaining_minutes);
    setRemainingDuration(remaining_minutes);
  }, []);

  const handleReset = () => {
    setIsCompleted(false);
    navigate("/thanksgiving");
  };
  if (count === 0) {
    navigate("/end");
    setIsCompleted(true);
  }

  return (
    <div>
      {!isCompleted ? (
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>Petition</h1>
              <p>
                Asking the Lord for needs,growth and persons that need salvation
                - 1 Tim.2:1:Eph.6:18;Matt.7:7; Psa.143:8
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
        <End />
      )}
      <div />
    </div>
  );
};

export default Petition;
