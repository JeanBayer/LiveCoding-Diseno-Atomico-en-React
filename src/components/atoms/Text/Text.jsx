import { HoverWrapper } from "../../util";
import "./style.css";

const Text = ({ text }) => (
  <HoverWrapper type="atom" message="Text">
    <p>{text}</p>
  </HoverWrapper>
);

export default Text;
