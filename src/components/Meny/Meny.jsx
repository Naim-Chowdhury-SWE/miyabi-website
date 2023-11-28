// Meny.jsx
/* import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MenuItem from "../Menuitem/MenuItem"; */
import PropTypes from "prop-types";
import "./Meny.css";

const Meny = ({ menuTitle }) => {
  /* const [filteredMenu, setFilteredMenu] = useState(menuData);
  const [originalMenu] = useState(menuData); */

  /* const handleSearch = (query) => {
    if (query === "") {
      setFilteredMenu(originalMenu);
    } else {
      const filteredItems = originalMenu.map((category) => {
        const filteredCategory = category.variants.filter(
          (variant) =>
            variant.title.toLowerCase().includes(query.toLowerCase()) ||
            variant.description.toLowerCase().includes(query.toLowerCase())
        );
        return { ...category, variants: filteredCategory };
      });

      setFilteredMenu(filteredItems);
    }
  }; */

  return (
    <div className="meny app__bg flex__center section__padding">
      <div className="meny-heading">
        <h1 className="headtext__cormorant">{menuTitle} Meny</h1>
      </div>

      {/* <SearchBar onSearch={handleSearch} />

      {filteredMenu.map((category) => (
        <div key={category.title} className="category-wrapper">
          <div className="meny-meny">
            {category.variants.map((variant, index) => (
              <div key={index} className="menu-title">
                <MenuItem variants={[variant]} />
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

Meny.propTypes = {
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  menuTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Meny;
