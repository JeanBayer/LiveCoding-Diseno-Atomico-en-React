import { HoverWrapper } from "../../util";
import Icon from "./../../atoms/Icon/Icon";
import "./style.css";

const IconSpec = ({ children, icon }) => {
  return (
    <HoverWrapper type="molecule" message="IconSpec">
      <span className="specification">
        <Icon type={icon} /> {children}
      </span>
    </HoverWrapper>
  );
};

export default IconSpec;
