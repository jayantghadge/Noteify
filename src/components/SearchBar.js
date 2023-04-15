import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MagnifyingGlassIcon className="h-6 w-6" />
      <input
        type="text"
        onChange={(e) => handleSearchNote(e.target.value)}
        placeholder="type to search..."
        autoFocus
      />
    </div>
  );
};

export default Search;
