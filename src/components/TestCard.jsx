// TestCard.jsx
/* import { useState } from "react";
import PropTypes from "prop-types";
import TestCarousel from "./Carousel/TestCarousel";

const TestCard = ({ title, variants }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleButtonClick = (variant) => {
    setSelectedVariant(variant);
  };
  console.log(title, variants);
  return (
    <div className="card">
      <h2>{title}</h2>
      <TestCarousel variants={variants} />
      <div className="buttons">
        {variants.map((variant, index) => (
          <button key={index} onClick={() => handleButtonClick(variant)}>
            {variant.subtitle}
          </button>
        ))}
      </div>
      <p className="description">{selectedVariant.description}</p>
      <p className="price">{selectedVariant.price}</p>
    </div>
  );
};

TestCard.propTypes = {
  title: PropTypes.string.isRequired,
  variants: PropTypes.array.isRequired,
};

export default TestCard; */

import SushiData from "../data/Meny/Sushi2";

const TestCard = () => {
  return (
    <div>
      <h1>Sushi Menu</h1>
    </div>
  );
};

export default TestCard;
