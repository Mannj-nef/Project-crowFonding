import React from "react";

const Search = ({ placeholder, ...props }) => {
  return (
    <div className="sticky top-0 z-10 p-2 bg-white dark:bg-darkStroke">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-4 border rounded-lg border-gray-200  outline-none"
        {...props}
      />
    </div>
  );
};

export default Search;
