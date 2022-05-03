const TotalElapsed = (props) => {
  return (
    <div className="InfoDisplay">
      <div>Total elapsed</div>
      <div>{props.elapsed}</div>
    </div>
  );
};
export default TotalElapsed;
