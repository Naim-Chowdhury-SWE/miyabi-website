import sushiData from "../../data/MenySushi"; // Import your updated data
import "./MenySushi.css"; // Import your CSS for styling
import MenuItem from "../Menuitem/MenuItem";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const MenySushi = () => {
  const [filteredSushi, setFilteredSushi] = useState(sushiData);

  const handleSearch = (query) => {
    // Filter the sushi items based on the search query
    const filteredItems = Object.keys(sushiData).reduce((result, category) => {
      const filteredCategory = sushiData[category].filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredCategory.length > 0) {
        result[category] = filteredCategory;
      }
      return result;
    }, {});

    setFilteredSushi(filteredItems);
  };
  return (
    <div className="menySushi app__bg flex__center section__padding">
      <div className="meny-sushi-heading">
          <h1 className="headtext__cormorant">Sushi Meny</h1>
      </div>

      <SearchBar onSearch={handleSearch} />
      
      {/* <div className="meny-sushi-meny">
        {menuSushi.map((sushi, index) => (
          <div key={index} className="menu-title">
            <MenuItem title={sushi.title} price={sushi.price} description={sushi.description} />  
        </div>
        ))}
      </div> */}

    {Object.keys(filteredSushi).map((category) => (
        <div key={category} className="category-wrapper">
          <h2>{category}</h2> {/* Display the category name */}
          <div className="meny-sushi-meny">
            {filteredSushi[category].map((sushi, index) => (
              <div key={index} className="menu-title">
                <MenuItem
                  title={sushi.title}
                  price={sushi.price}
                  description={sushi.description}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenySushi;
