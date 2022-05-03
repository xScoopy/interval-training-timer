import "./App.css";
import SetupMenu from "./SetupMenu";
import TimerSection from "./TimerSection";
import { useSelector } from "react-redux";
//condition ? true : false.

function App() {
  const isStarted = useSelector((state) => state.activity.isStarted);



  return (
    <div className="App">{isStarted ? <TimerSection /> : <SetupMenu />}</div>
  );
}

export default App;
