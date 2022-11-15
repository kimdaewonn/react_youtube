import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <BsSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="개발자 유튜버 검색"
        title="검색"
      />
    </div>
  )
}

export default SearchBar
