import activePic from "./media/stick_active.png";
import restPic from "./media/stick_rest.png";

const ImageSection = () => {
  return (
    <div>
      <img src={activePic} alt="active" />
      <img src={restPic} alt="rest" />
    </div>
  );
};
export default ImageSection