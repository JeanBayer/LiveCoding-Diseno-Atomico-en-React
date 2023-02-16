import classnames from "classnames";
import { HoverWrapper } from "../../util";
import Icon from "../../atoms/Icon/Icon";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import "./style.css";

const HeaderBar = ({ variant = "light", search }) => {
  const headerClasses = classnames("headerBar", {
    dark: variant === "dark",
    light: variant === "light",
    search: search,
  });

  return (
    <HoverWrapper type="organism" message="HeaderBar">
      <header className={headerClasses}>
        <Icon type="logo" />
        {search && <SearchBar />}
      </header>
    </HoverWrapper>
  );
};

export default HeaderBar;
