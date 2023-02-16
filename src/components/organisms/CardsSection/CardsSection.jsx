import classnames from "classnames";
import { HoverWrapper } from "../../util";
import ProductCard from "./../../molecules/ProductCard/ProductCard";
import TitleHeader from "../TitleHeader/TitleHeader";
import "./style.css";

const CardsSection = ({ title, subtitle, items = [], highlighted = false }) => {
  const cardsSliderClassnames = classnames("cards-slider", {
    special: highlighted,
  });

  return (
    <HoverWrapper type="organism" message="CardsSection">
      <section className={cardsSliderClassnames}>
        <TitleHeader title={title} subtitle={subtitle} />
        <div className="slider">
          {items.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
      </section>
    </HoverWrapper>
  );
};

export default CardsSection;
