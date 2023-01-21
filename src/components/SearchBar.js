import React from 'react';
import { useState } from 'react';

function SearchBar(props) {
  console.log(props);
  const [keyword, setKeyword] = useState('');
  const [inStock, setInStock] = useState(false);

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
    props.handleFilterProduct(event.target.value);
  }


  return (
    <div>
      <label htmlFor="filter">Search</label>
      <input
        onChange={handleKeywordInput}
        type="text"
        id="filter"
        value={keyword}
      />

    </div>
  );
}

export default SearchBar;
