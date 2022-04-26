const InputPrompt = (props) => {
    return (
        <label className="InputLabel">
            {props.question}
            <input type={"number"} className="InputField" placeholder={props.placeholder}></input>
        </label>
    )
}
export default InputPrompt