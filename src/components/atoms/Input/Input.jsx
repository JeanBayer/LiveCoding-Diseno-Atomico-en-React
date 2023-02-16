import { HoverWrapper } from "../../util";
import "./style.css";

const Input = ({ type, placeholder = "" }) => {
  return (
    <HoverWrapper type="atom" message="Input">
      <input type={type} placeholder={placeholder} />
    </HoverWrapper>
  );
};

export default Input;
