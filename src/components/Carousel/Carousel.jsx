/* import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "../../constants/imagesByIndex";
import "./Carousel.css";
import PropTypes from "prop-types";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt={index.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

EmblaCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.number).isRequired,
  options: PropTypes.object.isRequired,
};

export default EmblaCarousel;
 */

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { images } from "../../constants/imagesByIndex"; // Import the updated images array
import "./Carousel.css";
import PropTypes from "prop-types";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => {
            const imageData = images[index % images.length]; // Get the corresponding image data
            return (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={imageData.src}
                  alt={imageData.alt}
                />
                <div className="embla__text-box">
                  <p>{imageData.alt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

EmblaCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.number).isRequired,
  options: PropTypes.object.isRequired,
};

export default EmblaCarousel;
