import React from 'react'

class Sort extends React.Component{

  // constructor(){
  //   super()
  //   this.state = {
  //     selectedSort: 'all',
  //     greasedOnly: false
  //   }
  // }
  //
  // handleSelect = (event) => {
  //   const value = event.target.value
  //   this.setState({
  //     selectedSort: value
  //   })
  //   this.props.setSort(value)
  // }

  handleSortClick=()=>{
    return(
      <select name="type">
        <option value="Due Date">Due Date</option>
        <option value="Priority">Priority</option>
      </select>
    )
  }

  render(){
    return (
      <button onClick={this.handleSortClick}>Sort</button>
    )
  }
}

export default Sort
