// MenuItem.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import ImageModal from "../Modal/ImageModal";

const MenuItem = ({ title, variants }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Variant, SetVariant] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="component-wrapper">
        <div className="card-wrapper">
          <div className="card">
            <h3 className="card-title">{title}</h3>
            <img
              className="card-image"
              src={variants.image}
              alt={variants.alt}
            />
          </div>
        </div>
      </div>
      <ImageModal
        image={Variant.image}
        alt={Variant.title}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>

    /*  <div className="app__menuitem">
      <div className="app__menuitem-head">
        <img
          src={selectedVariant.image}
          alt={selectedVariant.alt}
          onClick={openModal}
        />
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {selectedVariant.title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{selectedVariant.price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {selectedVariant.description}
        </p>
      </div>

      <ImageModal
        image={selectedVariant.image}
        title={selectedVariant.title}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div> */
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuItem;
