import classnames from "classnames";
import { HoverWrapper } from "../../util";
import Icon from "../Icon/Icon";
import "./style.css";

const Button = ({ variant, text, icon }) => {
  const buttonClasses = classnames("button", {
    dark: variant === "dark",
    light: variant === "light",
    warning: variant === "warn",
    hasIcon: icon,
  });

  return (
    <HoverWrapper type="atom" message="Button">
      <button className={buttonClasses}>
        {icon && <Icon type={icon} />}
        {text}
      </button>
    </HoverWrapper>
  );
};

export default Button;
