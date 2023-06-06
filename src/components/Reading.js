import { useNavigate } from "react-router-dom";
import Confession from "./Confession";

const Reading = (props) => {
  const navigate = useNavigate();
  const { count, isPaused, isCompleted, handlePause, setIsCompleted } = props;

  const handleReset = () => {
    setIsCompleted(false);
    navigate("/praying");
  };

  return (
    <div>
      {!isCompleted ? (
        <div>
          <div>
            <h1>Pray-reading</h1>
            <p>
              Using our exercised spirit to pray over a verse or two. Turning
              the verses into a personal prayer - Eph.6:17-18;2 Tim.3:16
            </p>
          </div>
          <div>
            <div>{props.count}</div>
            <button onClick={handleReset}>Back</button>
            <button onClick={handlePause}>
              {isPaused ? "Continue" : "Pause"}
            </button>
            <button>Exit</button>
          </div>
        </div>
      ) : (
        <Confession />
      )}
    </div>
  );
};

export default Reading;
