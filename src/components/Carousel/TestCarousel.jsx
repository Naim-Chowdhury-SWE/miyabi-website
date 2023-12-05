// TestCarousel.jsx
import useEmblaCarousel from "embla-carousel-react";
import "./TestCarousel.css";
import PropTypes from "prop-types";

const TestCarousel = (props) => {
  const { variants } = props;
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {variants.map((variant, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={variant.image}
                alt={variant.alt}
              />
              {/* <p className="embla__text p__cormorant">{variant.alt}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TestCarousel.propTypes = {
  variants: PropTypes.array.isRequired,
};

export default TestCarousel;
