import { useNavigate } from "react-router-dom";
import Consecration from "./Consecration";

const Confession = (props) => {
  const navigate = useNavigate();
  const { count, isPaused, isCompleted, handlePause, setIsCompleted } = props;

  const handleReset = () => {
    setIsCompleted(false);
    navigate("/reading");
  };

  return (
    <div>
      {!isCompleted ? (
        <div>
          <div>
            <h1>Confession</h1>
            <p>
              Opening our heart, softening our heart and emptying
              ourselves.Telling Him that we love Him - 2 Cor.3:16; Psa. 62.8
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
        <Consecration />
      )}
    </div>
  );
};

export default Confession;
