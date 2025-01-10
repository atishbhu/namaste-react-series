import React from "react";

function SearchBox({ handleClick, searchText, handleChange }) {
  return (
    <div className="flex gap-3 p-5">
      <input
        type="text"
        placeholder="search..."
        value={searchText}
        onChange={handleChange}
        className="p-2 rounded-sm"
      />
      <button onClick={handleClick}>search</button>
    </div>
  );
}
export default SearchBox