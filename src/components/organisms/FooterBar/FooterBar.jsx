import classnames from "classnames";
import { HoverWrapper } from "../../util";
import Text from "../../atoms/Text/Text";
import "./style.css";

const FooterBar = ({ fixed }) => {
  const footerClasses = classnames("footerBar", {
    fixed: fixed,
  });

  return (
    <HoverWrapper type="organism" message="FooterBar">
      <footer className={footerClasses}>
        <Text text={"Todos los derechos reservados"} />
      </footer>
    </HoverWrapper>
  );
};

export default FooterBar;
