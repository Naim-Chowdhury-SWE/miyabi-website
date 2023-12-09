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

const dummyArray1 = ["David", "Lee", "Jenna"];

const dummyArray2 = [
  {
    name: "David",
    age: 32,
    job: "Marketing",
  },
  {
    name: "Lee",
    age: 16,
    job: "Coding",
  },
  {
    name: "Jenna",
    age: 22,
    job: "Designing",
  },
];

const dummyArray3 = [
  {
    title: "Lax Sushi",
    description: "Färsk lax sushi med ris, wasabi och ingefära",
    variants: [
      {
        subtitle: "8 bitar",
        price: "100kr",
      },
      {
        subtitle: "10 bitar",
        price: "120kr",
      },
      {
        subtitle: "12 bitar",
        price: "140kr",
      },
    ],
  },
  {
    title: "Avocado Sushi",
    description: "Färsk avocado sushi med ris, sjögräss och ingefära",
    variants: [
      {
        subtitle: "8 bitar",
        price: "77kr",
      },
      {
        subtitle: "10 bitar",
        price: "88kr",
      },
      {
        subtitle: "12 bitar",
        price: "99kr",
      },
    ],
  },
];

const TestCard = () => {
  return (
    <div>
      <h1>DummyArray 1</h1>
      {dummyArray1.map((name) => (
        <p key={name}>{name}</p>
      ))}
      <h1>DummyArray 2</h1>
      {dummyArray2.map((person) => (
        <>
          <h3>{person.name}</h3>
          <p>{person.age}</p>
          <p>{person.job}</p>
        </>
      ))}
      <h1>DummyArray 3</h1>
      {dummyArray3.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.variants.map((variant) => (
            <div key={variant.subtitle}>
              <h3>{variant.subtitle}</h3>
              <p>{variant.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TestCard;
