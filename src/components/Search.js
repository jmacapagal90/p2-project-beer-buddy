import React from "react";
import { Input } from "semantic-ui-react";

function Search({ setSearchQuery}) {

function handleChange(e) {
  setSearchQuery(e.target.value)
}
  return (
      <Input id='searchInput' icon='search 'onChange={handleChange}></Input>
    
    
  );
}

export default Search;
