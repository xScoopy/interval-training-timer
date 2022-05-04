/* eslint-disable react-hooks/exhaustive-deps */
import { formatTime } from "./utils";
import CurrentInterval from "./CurrentInterval";
import TotalElapsed from "./TotalElapsed";
import TotalRemaining from "./TotalRemaining";
import ImageSection from "./ImageSection";
import { useDispatch, useSelector } from "react-redux";
import { currentIntervalIncrement } from "./actions";
import useSound from "use-sound";
import bellSound from "./media/bellSound.wav"

const TimerSection = () => {
  const [play] = useSound(bellSound,{playbackRate:3})
  const dispatch = useDispatch()
  //grab necessary items from state
  const currentInterval = useSelector(
    (state) => state.interval.currentInterval
  );
  const activeLength = useSelector((state) => state.timers.activeLength);
  const restLength = useSelector((state) => state.timers.restLength);
  const totalInterval = useSelector((state) => state.interval.totalInterval);
  const isActive = useSelector((state) => state.timers.isActive);
  const currentActiveTime = useSelector((state) => state.timers.currentActive);
  const currentRestTime = useSelector((state) => state.timers.currentRest);
  const totalElapsed = useSelector((state) => state.timers.totalElapsed);
  const timeRemaining = useSelector((state) => state.timers.totalRemaining);
  //show time left for appropriate activity
  const timeLeft = isActive ? currentActiveTime : currentRestTime;
  

  if (totalElapsed >= (currentInterval * (activeLength + restLength))){
    play()
    dispatch(currentIntervalIncrement())
  }

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
      <ImageSection active={isActive}/>
    </div>
  );
};
export default TimerSection;
