import "./App.css";
import SetupMenu from "./SetupMenu";
import TimerSection from "./TimerSection";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "./actions"
//condition ? true : false.

function App() {
  const dispatch = useDispatch()
  const isStarted = useSelector((state) => state.timers.isStarted);
  if (isStarted) {
    let lastUpdateTime = Date.now();
    setInterval(() => {
      const now = Date.now();
      const deltaTime = now - lastUpdateTime;
      lastUpdateTime = now;
      dispatch(update(deltaTime));
    }, 50);
  }
  return (
    <div className="App">{isStarted ? <TimerSection /> : <SetupMenu />}</div>
  );
}

export default App;
