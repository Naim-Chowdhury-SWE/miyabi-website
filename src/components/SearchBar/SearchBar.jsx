import { useState } from 'react';
import "./SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Pass the query to the parent component for filtering
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

export default SearchBar;
