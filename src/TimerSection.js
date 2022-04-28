import CurrentInterval from "./CurrentInterval";
import TotalElapsed from "./TotalElapsed";
import TotalRemaining from "./TotalRemaining";
import ImageSection from "./ImageSection";
const TimerSection = () => {
  return (
    <div>
      <h1>1:59</h1>
      <CurrentInterval />
      <div className="TimerDisplays">
        <TotalElapsed />
        <TotalRemaining />
      </div>
      <ImageSection />
    </div>
  );
};
export default TimerSection;
