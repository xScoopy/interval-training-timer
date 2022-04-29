import CurrentInterval from "./CurrentInterval";
import TotalElapsed from "./TotalElapsed";
import TotalRemaining from "./TotalRemaining";
import ImageSection from "./ImageSection";
import { useSelector } from "react-redux";
const TimerSection = () => {
  const currentInterval = useSelector(state => state.interval.currentInterval)
  const totalInterval = useSelector(state => state.interval.totalInterval)
  return (
    <div>
      <h1>1:59</h1>
      <CurrentInterval currentInterval={currentInterval} totalInterval={totalInterval}/>
      <div className="TimerDisplays">
        <TotalElapsed />
        <TotalRemaining />
      </div>
      <ImageSection />
    </div>
  );
};
export default TimerSection;
