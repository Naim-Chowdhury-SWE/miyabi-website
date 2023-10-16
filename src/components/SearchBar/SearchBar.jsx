import { useState } from 'react';
import "./SearchBar.css"
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Sök..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
