import "./App.css";
import SetupMenu from "./SetupMenu";
import TimerSection from "./TimerSection";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "./actions";
import { useEffect } from 'react';
//condition ? true : false.

function App() {
  const dispatch = useDispatch();
  const isStarted = useSelector((state) => state.timers.isStarted);
  useEffect(() => {
    if (isStarted) {
      let lastUpdateTime = Date.now();
      const interval = setInterval(() => {
        const now = Date.now()
        const deltaTime = now - lastUpdateTime
        lastUpdateTime = now;
        dispatch(update(deltaTime))
      }, 10)
      return () => clearInterval(interval)
    } 
  }, [dispatch, isStarted])
  // if (isStarted) {
  //   let lastUpdateTime = Date.now();
  //   setInterval(() => {
  //     const now = Date.now();
  //     const deltaTime = now - lastUpdateTime;
  //     lastUpdateTime = now;
  //     dispatch(update(deltaTime));
  //   }, 50);
  // }
  return (
    <div className="App">{isStarted ? <TimerSection /> : <SetupMenu />}</div>
  );
}

export default App;
