import InputPrompt from './InputPrompt';
import StartButton from './StartButton';

const SetupMenu = () => {
  //setup prompts
  const questionOne = ["How many intervals?", "Total intervals"];
  const questionTwo = ["Active interval length?", "Total seconds"];
  const questionThree = ["Rest interval length?", "Total seconds"];

  const questionArray = [questionOne, questionTwo, questionThree];

  //create array of inputPrompt components
  const labels = questionArray.map((item) => {
    return <InputPrompt question={item[0]} placeholder={item[1]} />;
  });
  return (
    <div>
      <h1>H.I.I.T. Timer</h1>
      <div className="LabelHolder">{labels}</div>
      <div className="ButtonHolder">
        <StartButton />
      </div>
    </div>
  );
};

export default SetupMenu;
