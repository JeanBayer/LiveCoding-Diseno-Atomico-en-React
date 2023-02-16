import classNames from "classnames";
import { useState } from "react";
import "./style.css";

export const HoverWrapper = ({ children, message = "", type = "atom" }) => {
  const [isHovered, setIsHovered] = useState(true);
  const styleMessage = classNames({
    type,
    [type]: true,
  });

  const styleContainer = classNames({
    hoverContainer: true,
    [type]: true,
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styleContainer}
    >
      {children}
      {isHovered && (
        <p className="hoverMessage">
          <span className={styleMessage}>{type}</span>
          <span className="message">{message}</span>
        </p>
      )}
    </div>
  );
};
