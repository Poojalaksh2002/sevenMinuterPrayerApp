import { useEffect } from "react";
import Praying from "./Praying";
import { useNavigate } from "react-router-dom";

const CallingLord = (props) => {
  const {
    count,
    isPaused,
    isCompleted,
    handlePause,
    setIsCompleted,
    setCount,
  } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/praying");
    }
  }, [count, isPaused]);

  const handleReset = () => {
    setCount({ callingLord: 30 });
    setIsCompleted(false);
  };
  return (
    <div>
      {!isCompleted ? (
        <div>
          <div>
            <h1>Calling on the Name of the Lord</h1>
            <p>
              Calling on the Name of the Lord to set our mind on the spirit-1
              Cor.12:3;Rom.8:6; 10:12-13
            </p>
          </div>
          <div>
            <div>{props.count}</div>
            <button onClick={handleReset}>Back</button>
            <button onClick={handlePause}>
              {props.isPaused ? "Continue" : "Pause"}
            </button>
            <button>Exit</button>
          </div>
        </div>
      ) : (
        <Praying />
      )}
    </div>
  );
};

export default CallingLord;
