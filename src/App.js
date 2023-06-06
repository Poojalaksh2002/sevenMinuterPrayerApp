import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallingLord from "./components/CallingLord";
import Praying from "./components/Praying";
import Reading from "./components/Reading";
import Confession from "./components/Confession";
import Consecration from "./components/Consecration";
import ThanksGiving from "./components/ThanksGiving";
import Petition from "./components/Petition";
import End from "./components/End";
import React, { useState, useEffect } from "react";

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
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isPaused)
        setCount((prevCount) => ({
          callingLord:
            prevCount.callingLord >= 0
              ? prevCount.callingLord - 1
              : prevCount.callingLord,
          praying:
            prevCount.praying >= 0 ? prevCount.praying - 1 : prevCount.praying,
          reading:
            prevCount.reading >= 0 ? prevCount.reading - 1 : prevCount.reading,
          confession:
            prevCount.confession >= 0
              ? prevCount.confession - 1
              : prevCount.confession,
          consecration:
            prevCount.consecration >= 0
              ? prevCount.consecration - 1
              : prevCount.consecration,
          thanksgiving:
            prevCount.thanksgiving >= 0
              ? prevCount.thanksgiving - 1
              : prevCount.thanksgiving,
          petition:
            prevCount.petition >= 0
              ? prevCount.petition - 1
              : prevCount.petition,
          // ...prevCount,
          // callingLord: prevCount.callingLord - 1,
          // praying: prevCount.praying - 1,
          // reading: prevCount.reading - 1,
          // confession: prevCount.confession - 1,
          // consecration: prevCount.consecration - 1,
          // thanksgiving: prevCount.thanksgiving - 1,
          // petition: prevCount.petition - 1,
        }));
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [count, isPaused]);

  const handlePause = () => {
    setIsPaused((prevPause) => !prevPause);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <CallingLord
                count={count.callingLord}
                setCount={setCount}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
              />
            }
          />
          <Route
            path="/praying"
            element={
              <Praying
                count={count.praying}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
              />
            }
          />
          <Route
            path="/reading"
            element={
              <Reading
                count={count.reading}
                setCount={setCount}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
              />
            }
          />
          <Route
            path="/confession"
            element={
              <Confession
                count={count.confession}
                setCount={setCount}
                isCompleted={isCompleted}
                isPaused={isPaused}
                handlePause={handlePause}
                setIsCompleted={setIsCompleted}
              />
            }
          />
          <Route
            path="/consecration"
            element={
              <Consecration
                count={count.consecration}
                setCount={setCount}
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
                count={count.thanksgiving}
                setCount={setCount}
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
                count={count.petition}
                setCount={setCount}
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
