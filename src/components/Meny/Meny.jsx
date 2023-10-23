// Menu.jsx
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MenuItem from "../Menuitem/MenuItem";
import PropTypes from "prop-types";
import "./Meny.css";

const Meny = ({ menuData, menuTitle, id }) => {
  const [filteredMenu, setFilteredMenu] = useState(menuData);

  const handleSearch = (query) => {
    const filteredItems = Object.keys(menuData).reduce((result, category) => {
      const filteredCategory = menuData[category].filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredCategory.length > 0) {
        result[category] = filteredCategory;
      }
      return result;
    }, {});

    setFilteredMenu(filteredItems);
  };

  return (
    <div className="meny app__bg flex__center section__padding" id={id}>
      <div className="meny-heading">
        <h1 className="headtext__cormorant">{menuTitle} Meny</h1>
      </div>

      <SearchBar onSearch={handleSearch} />

      {Object.keys(filteredMenu).map((category) => (
        <div key={category} className="category-wrapper">
          {/* <h2>{category}</h2> */}
          <div className="meny-meny">
            {filteredMenu[category].map((item, index) => (
              <div key={index} className="menu-title">
                <MenuItem
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Meny.propTypes = {
  menuData: PropTypes.string.isRequired,
  menuTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Meny;
