import PropTypes from "prop-types";

import "./MenyNavbar.css";

const MenuNavbar = () => {
  return (
    <nav className="menu-navbar app__bg">
      <ul className="p__cormorant">
        <li>
          <a href="#LunchMeny">Lunch</a>
        </li>
        <li>
          <a href="#SushiMeny">Sushi</a>
        </li>
        <li>
          <a href="#NorimakiMeny">Norimaki</a>
        </li>
        <li>
          <a href="#VarmratterMeny">Varmrätter</a>
        </li>
        <li>
          <a href="#SpecialMeny">Special</a>
        </li>
        <li>
          <a href="#BarnMeny">Barn</a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

MenuNavbar.propTypes = {
  menuData: PropTypes.string.isRequired,
  menuTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MenuNavbar;
