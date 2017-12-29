import React from 'react'

const SearchBar = (props) => {

const handleChange = (event) => {
  props.handleSearch(event.target.value)
}
//
// onChange={handleChange}
    return(
        <div class="ui loading search">
          <div class="ui icon input">
            <input
              class="prompt"
              type="text"
              placeholder="Search..."
              onChange={handleChange}
              />
            {props.searchTerm ? <i class="search icon"></i> : null}
          </div>
        <div class="results"></div>
      </div>
    )
}

export default SearchBar
