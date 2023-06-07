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
  const [countB, countC, countD, countE, countF, countG] = [
    60,
    150,
    60,
    30,
    30,
    60,
  ];

  const [isExist, setIsExist] = useState(false);
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
  const handlingExit = () => {
    setIsExist(true);
    setIsPaused(true);
  };
  const handleResume = () => {
    setIsPaused(false);
    setIsExist(false);
  };
  const Duration = count + countB + countC + countD + countE + countF + countG;
  const remainingMinutes = Math.floor(Duration / 60);
  const remainingSeconds = Duration % 60;
  return (
    <div>
      {isExist && (
        <div className="overlay">
          <div className="container">
            <div>
              <p>
                `[Jesus] said...'So were you not able to watch with Me for [
                {remainingMinutes}:{remainingSeconds} more minutes]? Watch and
                pray that you may not enter into temptation. The spirit is
                willing, but the flesh is weak.'(Matt.26:40b-41)`
              </p>
            </div>
            <div>
              <div className="exitbg">
                <div className="buttons">
                  <button onClick={handleResume}>Resume</button>
                  <button>Exit anyway</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
         {!isCompleted && (
          <div className="text-container">
            <div className="flex-container">
              <div className="flex-item1">
                <h1>Calling on the Name of the Lord</h1>
                <p>
                  Calling on the Name of the Lord to set our mind on the spirit-1
                  Cor.12:3;Rom.8:6; 10:12-13
                </p>
              </div>
  
              <div className="flex-item2">
                <h4 className="count">{props.count}</h4>
              </div>
  
              <div className="flex-item3">
                <div className="home-buttons">
                  <button onClick={handleReset}>Back</button>
                  <button onClick={handlePause}>
                    {props.isPaused  ? "Continue" : "Pause"}
                  </button>
                  <button className="exit" onClick={handlingExit}>
                    Exit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isCompleted && <Praying />}
        <div />
       
   </div>
  )

};

export default CallingLord;








  // Exit code

 

     


