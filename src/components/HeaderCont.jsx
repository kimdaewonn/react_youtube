import React from 'react'

import { SearchBar } from './'

import { BsYoutube } from 'react-icons/bs'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <BsYoutube className="icon" /> Programmer{' '}
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
