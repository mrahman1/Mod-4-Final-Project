import React from 'react'
import SearchBar from './SearchBar'

const Navbar = (props) => {
  return (
    <div class="ui two item menu">
      <a class="item active">My Tasks</a>
      <SearchBar handleSearch = {props.handleSearch}/>
    </div>
  )
}

export default Navbar
