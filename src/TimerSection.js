import CurrentInterval from "./CurrentInterval";
import TotalElapsed from "./TotalElapsed";
import TotalRemaining from "./TotalRemaining";
import ImageSection from "./ImageSection";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import throttle from 'lodash/throttle'
import { currentActiveDecrement, currentIntervalIncrement, currentRestDecrement, incrementElapsed, swapCurrentActivity, toggleTraining, currentActive, currentRest } from "./actions";
const TimerSection = () => {
  const dispatch = useDispatch()
  //grab necessary items from state
  const isStarted = useSelector((state) => state.activity.isStarted);
  const currentInterval = useSelector(state => state.interval.currentInterval)
  const totalInterval = useSelector(state => state.interval.totalInterval)
  const isActive = useSelector(state => state.activity.currentlyActive)
  const currentActiveTime = useSelector(state => state.timers.currentActive)
  const currentRestTime = useSelector(state => state.timers.currentRest)
  const activeLength = useSelector(state => state.timers.activeLength)
  const restLength = useSelector(state => state.timers.restLength)
  const totalElapsed = useSelector(state => state.timers.totalElapsed)
  
  //show time left for appropriate activity
  const timeLeft = (isActive ? currentActiveTime: currentRestTime)

  //Calculate time for elapsed and remaining displays
  const overallTotalTime = totalInterval * (activeLength + restLength)
  const timeRemaining = overallTotalTime - totalElapsed

  if (isStarted) {
    setInterval(throttle(() => {
      if (isActive) {
        if (currentActiveTime > 0) {
          dispatch(currentActiveDecrement())
        }
        else {
          dispatch(currentActive(activeLength))
          dispatch(swapCurrentActivity())
        }
      }
      else {
        if (currentRestTime > 0) {
          dispatch(currentRestDecrement())
        }
        else{
          if (currentInterval === totalInterval) {
            dispatch(toggleTraining())
          }
          dispatch(currentRest(restLength))
          dispatch(swapCurrentActivity())
          dispatch(currentIntervalIncrement())
        }
      }
      dispatch(incrementElapsed())
    }, 1000)
    )}

    // React.useEffect(() => {
    //   // Store the interval id in a const, so you can cleanup later
    //   const intervalId = setInterval(() => {
    //     setCount(oldCount => oldCount + 1);
    //   }, 1000);
      
    //   return () => {
    //     // Since useEffect dependency array is empty, this will be called only on unmount
    //     clearInterval(intervalId);
    //   };
    // }, []);

  return (
    <div>
      <h1>{timeLeft}</h1>
      <CurrentInterval currentInterval={currentInterval} totalInterval={totalInterval}/>
      <div className="TimerDisplays">
        <TotalElapsed elapsed={totalElapsed}/>
        <TotalRemaining remaining={timeRemaining}/>
      </div>
      <ImageSection />
    </div>
  );
};
export default TimerSection;
