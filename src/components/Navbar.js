import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';

// <SearchBar handleSearch = {props.handleSearch}/>

const Navbar = (props) => {
  return (
      <div class="ui red three inverted menu">
        <div class="left menu">
          <Link to="/" className="item">
            <button class="ui inverted grey button">{props.currentUser ? 'Logout' : 'Login'} </button>
          </Link>

          <Link to="/tasks" className="item">
            <button class="ui inverted grey button">Tasks</button>
          </Link>
        </div>

        <div class="menu" id="search">
          <div class="ui category search item">
            <SearchBar
              id = "search-bar"
              handleSearch = {props.handleSearch}
              searchTerm = {props.searchTerm}
            />
          </div>
        </div>

    </div>
  )
}

export default Navbar
