import React from "react";

const SearchBox = ({ searchText, handleChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="search robots"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
