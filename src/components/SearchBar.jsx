import React from 'react'
import { SlMagnifier } from 'react-icons/sl'
const SearchBar = () => {
  return (
    <div className="search">
      <label htmlFor="searchInput" className="glass">
        <SlMagnifier />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__searc"
        placeholder="개발자 유튜버 검색"
        title="검색"
      />
    </div>
  )
}
export default SearchBar
