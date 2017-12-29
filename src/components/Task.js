import React from 'react'
import ShowCurrentTask from './ShowCurrentTask'

class Task extends React.Component{
  state = {
    complete: false
  }

  handleSelectTaskClick = (event) => {
    this.props.updateCurrentTask(this.props.task)
    // this.setState({clicked: !this.state.clicked})
  }

  handleCheckTaskClick= (event) => {
    //<i class="check circle icon"></i>
    this.setState({complete: !this.state.complete})
  }

  render(){
    console.log(this.state)
    const markCompleted = this.state.complete ? <i class="check circle outline icon"></i> :  <i class="circle thin icon" ></i>
    const displayCurrentTask = this.props.currentTask? <td><ShowCurrentTask currentTask = {this.props.currentTask} clearCurrentTask = {this.props.clearCurrentTask} deleteCurrentTask = {this.props.deleteCurrentTask} editCurrentTask = {this.props.editCurrentTask}/> </td> : null

    return (
      <tr>
        <td id= "Complete" onClick={this.handleCheckTaskClick}> {markCompleted} </td>
        <td class="selectable" onClick= {this.handleSelectTaskClick}>{this.props.task.item}</td>
        {displayCurrentTask}
      </tr>
    )
  }
}

export default Task;
