import React from 'react'
import { HiSearch } from "react-icons/hi";

function SearchBar({ query, setQuery }) {
  return (
    <div className="searchBar">
      <h2>Filters</h2>
      <div className="search">
        <HiSearch
          className="search-icon"
          aria-hidden="true"
        />
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder='Smart Search...' 
        />
      </div>
    </div>
  )
}

export default SearchBar