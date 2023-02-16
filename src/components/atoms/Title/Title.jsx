import { HoverWrapper } from "../../util";
import "./style.css";

const Title = ({ level, text }) => {
  return (
    <>
      <HoverWrapper type="atom" message="Title">
        {level === "h1" && <h1>{text}</h1>}
        {level === "h2" && <h2>{text}</h2>}
        {level === "h3" && <h3>{text}</h3>}
      </HoverWrapper>
    </>
  );
};

export default Title;
