import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Consecration from "./Consecration";
const Confession = (props) => {
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
    const total_duration_confession =
      props.allCount.confessionCount +
      props.allCount.consecrationCount +
      props.allCount.thanksgivingCount +
      props.allCount.petitionCount;
    console.log(props.allCount.confessionCount);
    console.log(total_duration_confession);
    // const remaining_minutes = Math.floor(total_duration / 60);
    const remaining_minutes = (total_duration_confession / 60).toFixed(1);

    console.log(remaining_minutes);
    setRemainingDuration(remaining_minutes);
  }, []);

  const handleReset = () => {
    setIsCompleted(false);
    navigate("/prayreading");
  };
  if (props.count === 0) {
    navigate("/consecration");
    // setIsCompleted(true);
  }

  return (
    <div>
      {!isCompleted ? (
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>Confession</h1>
              <p>
                Confessing the sins and offenses on our conscience and removing
                all blockages to fellowship.Asking for forgiveness and
                cleansing-1 John 1:7,9; Psa.66:18; Isa.59:1-2
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
        <Consecration />
      )}
      <div />
    </div>
  );

  // const Confession = (props) => {
  //   console.log(props);

  //   const navigate = useNavigate();
  //   const {
  //     handlingExit,
  //     allCount,
  //     setRemainingDuration,
  //     count,
  //     isPaused,
  //     isCompleted,
  //     handlePause,
  //     setIsCompleted,
  //   } = props;
  //   console.log(count);

  //   useEffect(() => {
  //     const total_duration_confession =
  //       allCount.confessionCount +
  //       allCount.consecrationCount +
  //       allCount.thanksgivingCount +
  //       allCount.petitionCount;
  //     console.log(total_duration_confession);
  //     const remaining_minutes = Math.floor(total_duration_confession / 60);
  //     // const remaining_minutes = (total_duration / 60).toFixed(1);

  //     console.log(remaining_minutes);
  //     setRemainingDuration(remaining_minutes);
  //   }, []);

  //   const handleReset = () => {
  //     setIsCompleted(false);
  //     navigate("/prayreading");
  //   };

  //   if (props.count === 1) {
  //     navigate("/consecration");
  //     // setIsCompleted(true);
  //   }

  //   return (
  //     <div>
  //       {!isCompleted ? (
  //         <div className="text-container">
  //           <div className="flex-container">
  //             <div>
  //               <h1>Confession</h1>
  //               <p>
  //                 Confessing the sins and offenses on our conscience and removing
  //                 all blockages to fellowship.Asking for forgiveness and
  //                 cleansing-1 John 1:7,9; Psa.66:18; Isa.59:1-2
  //               </p>
  //             </div>

  //             <div>
  //               <h4 className="count">{props.count}</h4>
  //             </div>

  //             <div>
  //               <div className="home-buttons">
  //                 <button onClick={handleReset}>Back</button>
  //                 <button onClick={handlePause}>
  //                   {isPaused ? "Continue" : "Pause"}
  //                 </button>
  //                 <button className="exit" onClick={handlingExit}>
  //                   Exit
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <Consecration />
  //       )}
  //       <div />
  //     </div>
  //   );
};

export default Confession;
