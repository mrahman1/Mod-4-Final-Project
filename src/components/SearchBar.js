import React from 'react'

const SearchBar = (props) => {

const handleChange = (event) => {
  props.handleSearch(event.target.value)
}

    return(
      <input
        type = "text"
        placeholder="enter search"
        onChange = {handleChange}
      />
    )
}

export default SearchBar
