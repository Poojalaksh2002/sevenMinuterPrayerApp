import { useNavigate } from "react-router-dom";
import Reading from "./Reading";

const Praying = (props) => {
  const navigate = useNavigate();
  const { count, isPaused, isCompleted, handlePause, setIsCompleted } = props;

  const handleResetTwo = () => {
    setIsCompleted(false);
    navigate("/");
  };

  return (
    <div>
      {!isCompleted ? (
        <div>
          <div>
            <h1>Praying</h1>
            <p>
              Opening our heart, softening our heart and emptying
              ourselves.Telling Him that we love Him - 2 Cor.3:16; Psa. 62.8
            </p>
          </div>
          <div>
            <div>{count}</div>
            <button onClick={handleResetTwo}>Back</button>
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

export default Praying;

