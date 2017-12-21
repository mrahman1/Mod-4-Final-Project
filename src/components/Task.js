import React from 'react'

class Task extends React.Component{

  render(){
    return(
      <li> {this.props.task.item} </li>
    )
  }
}

export default Task;
