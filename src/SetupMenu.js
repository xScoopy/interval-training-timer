import StartButton from "./StartButton";
import { useDispatch } from "react-redux";
import { setActive, setRest, setInterval } from "./actions";

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
            onChange={(e)=> {dispatch(setInterval(parseInt(e.target.value)))} }
          />
        </label>
        <label className="InputLabel">
          Active interval length?
          <input
            type={"number"}
            className="InputField"
            placeholder={"Total seconds"}
            onChange={(e) => {dispatch(setActive(parseInt(e.target.value)))}}
          />
        </label>
        <label className="InputLabel">
        Rest interval length?
          <input
            type={"number"}
            className="InputField"
            placeholder={"Total seconds"}
            onChange={(e) => {dispatch(setRest(parseInt(e.target.value)))}}
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
