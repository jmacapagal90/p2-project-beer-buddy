import React from "react";

function Search({ setSearchQuery}) {

function handleChange(e) {
  setSearchQuery(e.target.value)
}

  return (
    <div className="homeHeader">
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={handleChange} className="prompt" />
          <i className="search icon" />
        </div>
      </div>
    </div>
  );
}

export default Search;
