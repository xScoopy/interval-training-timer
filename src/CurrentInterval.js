
const CurrentInterval = (props) => {
  return (
    <div className="infoDisplay">
      <div className="intervalTitle">Current Interval</div>
      <div className="intervalInfo">{props.currentInterval} of {props.totalInterval}</div>
    </div>
  );
};
export default CurrentInterval
