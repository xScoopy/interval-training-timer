import StartButton from "./StartButton";
import { useDispatch } from "react-redux";

const SetupMenu = () => {
  const dispatch = useDispatch()
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
            onChange={(e)=> dispatch(setInterval(e.target.value))}
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
