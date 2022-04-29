import { useDispatch } from "react-redux"


const InputPrompt = (props) => {
    return (
        <label className="InputLabel">
            {props.question}
            <input type={"number"} className="InputField" placeholder={props.placeholder} />
        </label>
    )
}
export default InputPrompt