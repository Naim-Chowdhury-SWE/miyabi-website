import { useState, useEffect, useRef } from "react";
import { EmblaCarousel } from "embla-carousel-react";
import { blandadSushi2 } from "../../data/Meny/Sushi2"; // Import your data
import "./Test.css";

const Test = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prices, setPrices] = useState([]); // Initialize prices state
  const carousel = useRef(null);

  // Extract images and prices from the data
  const images = blandadSushi2
    .map((category) => category.variants.map((variant) => variant.image))
    .flat();

  useEffect(() => {
    // Extract prices from the data
    const extractedPrices = blandadSushi2
      .map((category) => category.variants.map((variant) => variant.price))
      .flat();

    setPrices(extractedPrices);
  }, []);

  useEffect(() => {
    // Update the UI or perform any other actions when selectedIndex changes
    console.log(`Selected Index: ${selectedIndex}`);
  }, [selectedIndex]);

  const handleButtonClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="card">
      <h2>Image Carousel</h2>
      <div className="carousel-container">
        <EmblaCarousel
          htmlTagName="div"
          emblaRef={carousel}
          options={{ loop: false }}
          onSelect={(index) => setSelectedIndex(index)}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </EmblaCarousel>
      </div>

      <div className="button-container">
        {blandadSushi2.map((category, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {`Button ${index + 1}`}
          </button>
        ))}
      </div>

      <p className="price-text">Price: {prices[selectedIndex]}</p>
    </div>
  );
};

export default Test;
