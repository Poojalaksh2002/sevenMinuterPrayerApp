import { useNavigate } from "react-router-dom";
import Reading from "./Reading";
import React, { useEffect } from "react";

const Praying = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const {
    count,
    isPaused,
    isCompleted,
    handlePause,
    setIsCompleted,
    handlingExit,
    allCount,
    setRemainingDuration,
  } = props;

  useEffect(() => {
    const total_duration_praying =
      props.allCount.prayingCount +
      props.allCount.readingCount +
      props.allCount.confessionCount +
      props.allCount.consecrationCount +
      props.allCount.thanksgivingCount +
      props.allCount.petitionCount;
    console.log(props.allCount.prayingCount);
    console.log(total_duration_praying);
    // const remaining_minutes = Math.floor(total_duration / 60);
    const remaining_minutes = (total_duration_praying / 60).toFixed(1);

    console.log(remaining_minutes);
    setRemainingDuration(remaining_minutes);
  }, []);

  const handleResetTwo = () => {
    setIsCompleted(false);
    navigate("/");
  };
  if (count === 0) {
    navigate("/prayreading");
    // setIsCompleted(true);
  }

  return (
    <div>
      {!isCompleted ? (
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>Praying</h1>
              <p>
                Opening our heart, softening our heart and emptying
                ourselves.Telling Him that we love Him - 2 Cor.3:16; Psa. 62.8
              </p>
            </div>

            <div>
              <h4 className="count">{count}</h4>
            </div>

            <div>
              <div className="home-buttons">
                <button onClick={handleResetTwo}>Back</button>
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
        <Reading />
      )}
      <div />
    </div>
  );
};

export default Praying;
