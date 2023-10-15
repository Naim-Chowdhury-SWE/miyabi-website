import './MenuItem.css';
import PropTypes from 'prop-types';

const MenuItem = ({ image, title, price, description }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <img
          src={image}
          alt="placeholder"
        />
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>{description}</p>
      </div>
    </div>

  )
};
MenuItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MenuItem;