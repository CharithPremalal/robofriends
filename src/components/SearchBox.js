import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="dim br3 ph3 pv2 mb2 pa2 ba b--green bg-lightest-blue "
        type="search"
        placeholder="Search Robot"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
