import activePic from "./media/stick_active.png";
import restPic from "./media/stick_rest.png";

const ImageSection = (props) => {
  return (
    <div>
      {props.active ? <img src={activePic} alt="active" /> : <img src={restPic} alt="rest" /> }
      
      
    </div>
  );
};
export default ImageSection