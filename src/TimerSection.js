/* eslint-disable react-hooks/exhaustive-deps */
import { formatTime } from "./utils";
import CurrentInterval from "./CurrentInterval";
import TotalElapsed from "./TotalElapsed";
import TotalRemaining from "./TotalRemaining";
import ImageSection from "./ImageSection";
import { useSelector } from "react-redux";

const TimerSection = () => {
  //grab necessary items from state
  const currentInterval = useSelector(
    (state) => state.interval.currentInterval
  );
  const totalInterval = useSelector((state) => state.interval.totalInterval);
  const isActive = useSelector((state) => state.timers.isActive);
  const currentActiveTime = useSelector((state) => state.timers.currentActive);
  const currentRestTime = useSelector((state) => state.timers.currentRest);
  const totalElapsed = useSelector((state) => state.timers.totalElapsed);
  const timeRemaining = useSelector((state) => state.timers.totalRemaining);
  const allState = useSelector((state) => state)
  //show time left for appropriate activity
  const timeLeft = isActive ? currentActiveTime : currentRestTime;
    console.log(allState)
  return (
    <div>
      <h1>{formatTime(timeLeft)}</h1>
      <CurrentInterval
        currentInterval={currentInterval}
        totalInterval={totalInterval}
      />
      <div className="TimerDisplays">
        <TotalElapsed elapsed={formatTime(totalElapsed)} />
        <TotalRemaining remaining={formatTime(timeRemaining)} />
      </div>
      <ImageSection />
    </div>
  );
};
export default TimerSection;
