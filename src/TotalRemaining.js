const TotalRemaining = (props) => {
  return (
    <div className="InfoDisplay">
      <div>Total remaining</div>
      <div>{props.remaining}</div>
    </div>
  );
};
export default TotalRemaining;
