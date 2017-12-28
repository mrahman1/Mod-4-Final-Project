import React from 'react'

class Task extends React.Component{
  state = {
    clicked: false
  }

  handleClicked = (event) => {
    this.props.updateCurrentTask(this.props.task)
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return <li onClick = {this.handleClicked}> {this.props.task.item} </li>
  }
}

export default Task;
