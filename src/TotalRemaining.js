const TotalRemaining = (props) => {
  return (
    <div className="InfoDisplay">
      <div className="remainingTitle">Total remaining</div>
      <div className="remainingInfo">{props.remaining}</div>
    </div>
  );
};
export default TotalRemaining;
