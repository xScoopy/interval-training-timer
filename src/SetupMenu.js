import StartButton from "./StartButton";

const SetupMenu = () => {
  return (
    <div>
      <h1>H.I.I.T. Timer</h1>
      <div className="LabelHolder">
        <label className="InputLabel">
          How many intervals?
          <input
            type={"number"}
            className="InputField"
            placeholder={"Total intervals"}
          />
        </label>
        <label className="InputLabel">
          Active interval length?
          <input
            type={"number"}
            className="InputField"
            placeholder={"Total seconds"}
          />
        </label>
        <label className="InputLabel">
        Rest interval length?
          <input
            type={"number"}
            className="InputField"
            placeholder={"Total seconds"}
          />
        </label>
      </div>
      <div className="ButtonHolder">
        <StartButton />
      </div>
    </div>
  );
};

export default SetupMenu;
