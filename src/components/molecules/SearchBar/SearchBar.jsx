import { HoverWrapper } from "../../util";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import "./style.css";

const SearchBar = () => {
  return (
    <HoverWrapper type="molecule" message="SearchBar">
      <div className="searchBar">
        <Input type="text" placeholder="Buscar producto..." />
        <Button variant="light" icon="search" text="Buscar" />
      </div>
    </HoverWrapper>
  );
};

export default SearchBar;
