import { HoverWrapper } from "../../util";
import Title from "../../atoms/Title/Title";
import "./style.css";

const TitleHeader = ({ title, subtitle }) => {
  return (
    <HoverWrapper type="organism" message="CardsSection">
      <header>
        <Title level="h2" text={title}>
          {title}
        </Title>
        {subtitle && <p>{subtitle}</p>}
      </header>
    </HoverWrapper>
  );
};

export default TitleHeader;
