import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';

// <SearchBar handleSearch = {props.handleSearch}/>

const Navbar = (props) => {
  return (
    <div class="ui red inverted menu">
        <Link to="/login" className="item">
          <div className="ui primary button">Log In</div>
        </Link>
        <Link to="/tasks" className="item">
            <div className="ui primary button">Tasks</div>
          </Link>
      <div class="ui category search item">
        <SearchBar
          id = "search-bar"
          handleSearch = {props.handleSearch}
          searchTerm = {props.searchTerm}
        />
      </div>
    </div>
  )
}

export default Navbar
