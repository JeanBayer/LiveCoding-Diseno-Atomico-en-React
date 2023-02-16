import { HoverWrapper } from "../../util";

const Image = ({ source, altText }) => (
  <HoverWrapper type="atom" message="Image">
    <img src={source} alt={altText} />
  </HoverWrapper>
);

export default Image;
