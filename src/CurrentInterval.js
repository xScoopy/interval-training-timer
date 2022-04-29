
const CurrentInterval = (props) => {
  return (
    <div className="infoDisplay">
      <div>Current Interval</div>
      <div>{props.currentInterval} of {props.totalInterval}</div>
    </div>
  );
};
export default CurrentInterval
