import React from 'react'
import EditCurrentTask from './EditCurrentTask'
import DeleteCurrentTask from './DeleteCurrentTask'

class Task extends React.Component{
  state = {
    complete: false,
    taskSelected: false
  }

  handleSelectTaskClick = (event) => {
    this.props.updateDisplay(), this.setState({taskSelected: !this.state.taskSelected})
  }

  handleCheckTaskClick= (event) => {
    this.setState({complete: !this.state.complete})
  }

  render(){
    const markCompleted = this.state.complete ? <i class="check circle outline icon"></i> :  <i class="circle thin icon" ></i>
    const displayCurrentTask = this.state.taskSelected ? <EditCurrentTask task={this.props.task}/> : null
    const deleteCurrentTask = this.state.taskSelected ? <DeleteCurrentTask/> : null

    return (
      <tr>
        <td id= "Complete" onClick={this.handleCheckTaskClick}> {markCompleted} </td>
        <td class="selectable" onClick= {this.handleSelectTaskClick}>{this.props.task.item}</td>
        {displayCurrentTask}
        {deleteCurrentTask}
      </tr>

    )
  }
}

export default Task;
