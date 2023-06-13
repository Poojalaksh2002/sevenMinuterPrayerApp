import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallingLord from "./components/CallingLord";
import Praying from "./components/Praying";
import Confession from "./components/Confession";
import Consecration from "./components/Consecration";
import ThanksGiving from "./components/ThanksGiving";
import Petition from "./components/Petition";
import End from "./components/End";
import React, { useState, useEffect } from "react";
import Reading from "./components/Reading";

function App() {
  const [count, setCount] = useState({
    callingLord: 30,
    praying: 60,
    reading: 150,
    confession: 60,
    consecration: 30,
    thanksgiving: 30,
    petition: 60,
  });
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [remainingDuration, setRemainingDuration] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isPaused)
        setCount((prevCount) => ({
          callingLord:
            prevCount.callingLord > 0
              ? prevCount.callingLord - 1
              : prevCount.callingLord,
          praying:
            prevCount.praying > 0 ? prevCount.praying - 1 : prevCount.praying,
          reading:
            prevCount.reading > 0 ? prevCount.reading - 1 : prevCount.reading,
          confession:
            prevCount.confession > 0
              ? prevCount.confession - 1
              : prevCount.confession,
          consecration:
            prevCount.consecration > 0
              ? prevCount.consecration - 1
              : prevCount.consecration,
          thanksgiving:
            prevCount.thanksgiving > 0
              ? prevCount.thanksgiving - 1
              : prevCount.thanksgiving,
          petition:
            prevCount.petition > 0
              ? prevCount.petition - 1
              : prevCount.petition,
        }));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [count, isPaused]);

  const handlePause = () => {
    setIsPaused((prevPause) => !prevPause);
  };
  const handlingExit = () => {
    setIsExist(true);
    setIsPaused(true);
  };
  const handleResume = () => {
    setIsPaused(false);
    setIsExist(false);
  };
  let initial_count = {
    callingLordCount: 30,
    prayingCount: 60,
    readingCount: 150,
    confessionCount: 60,
    consecrationCount: 30,
    thanksgivingCount: 30,
    petitionCount: 60,
  };

  return (
    <BrowserRouter>
      <div className="App">
        {isExist && (
          <div className="overlay">
            <div className="container">
              <div>
                <p>
                  [Jesus] said...'So were you not able to watch with Me for [
                  {remainingDuration} more minutes]? Watch and pray that you may
                  not enter into temptation. The spirit is willing, but the
                  flesh is weak.'(Matt.26:40b-41)
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
        <Routes>
          <Route
            path="/"
            element={
              <CallingLord
                allCount={initial_count}
                count={count.callingLord}
                setCount={setCount}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
                setIsPaused={setIsPaused}
                handlingExit={handlingExit}
                handleResume={handleResume}
                isExist={isExist}
                setRemainingDuration={setRemainingDuration}
              />
            }
          />
          <Route
            path="/praying"
            element={
              <Praying
                allCount={{
                  prayingCount: 60,
                  readingCount: 150,
                  confessionCount: 60,
                  consecrationCount: 30,
                  thanksgivingCount: 30,
                  petitionCount: 60,
                }}
                setRemainingDuration={setRemainingDuration}
                count={count.praying}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
                handlingExit={handlingExit}
                // setIsPaused={setIsPaused}
                // handleResume={handleResume}
                isExist={isExist}
              />
            }
          />
          <Route
            path="/prayreading"
            element={
              <Reading
                allCount={{
                  readingCount: 150,
                  confessionCount: 60,
                  consecrationCount: 30,
                  thanksgivingCount: 30,
                  petitionCount: 60,
                }}
                setRemainingDuration={setRemainingDuration}
                handlingExit={handlingExit}
                count={count.reading}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
                isExist={isExist}
              />
            }
          />
          <Route
            path="/confession"
            element={
              <Confession
                allCount={{
                  confessionCount: 60,
                  consecrationCount: 30,
                  thanksgivingCount: 30,
                  petitionCount: 60,
                }}
                setRemainingDuration={setRemainingDuration}
                handlingExit={handlingExit}
                {...{ count: count.confession }}
                // count={count.confession}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
                isExist={isExist}
              />
            }
          />
          <Route
            path="/consecration"
            element={
              <Consecration
                allCount={{
                  consecrationCount: 30,
                  thanksgivingCount: 30,
                  petitionCount: 60,
                }}
                setRemainingDuration={setRemainingDuration}
                handlingExit={handlingExit}
                count={count.consecration}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
              />
            }
          />
          <Route
            path="/thanksgiving"
            element={
              <ThanksGiving
                allCount={{
                  thanksgivingCount: 30,
                  petitionCount: 60,
                }}
                setRemainingDuration={setRemainingDuration}
                handlingExit={handlingExit}
                count={count.thanksgiving}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
              />
            }
          />
          <Route
            path="/petition"
            element={
              <Petition
                allCount={{
                  petitionCount: 60,
                }}
                setRemainingDuration={setRemainingDuration}
                handlingExit={handlingExit}
                count={count.petition}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
              />
            }
          />
          <Route path="/end" element={<End />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
