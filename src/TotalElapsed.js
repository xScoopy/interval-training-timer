const TotalElapsed = (props) => {
  return (
    <div className="InfoDisplay">
      <div className="elapsedTitle">Total elapsed</div>
      <div className="elapsedInfo">{props.elapsed}</div>
    </div>
  );
};
export default TotalElapsed;
