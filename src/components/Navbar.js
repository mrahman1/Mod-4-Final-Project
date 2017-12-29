import React from 'react'
import SearchBar from './SearchBar'

// <SearchBar handleSearch = {props.handleSearch}/>

const Navbar = (props) => {
  return (
    <div class="ui red three item inverted menu">
      <div class="ui category search item">
        <SearchBar
          handleSearch = {props.handleSearch}
          searchTerm = {props.searchTerm}
        />
      </div>
    </div>
  )
}

export default Navbar
