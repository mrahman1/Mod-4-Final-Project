import React from 'react'
import DeleteCurrentTask from './DeleteCurrentTask'
import EditCurrentTask from './EditCurrentTask'

class Task extends React.Component{
  state = {
    complete: false,
  }

  handleSelectTaskClick = (event) => {
    this.props.setCurrentTask(this.props.task)
  }

  handleCheckTaskClick= (event) => {
    this.setState({complete: !this.state.complete})
  }

  displayEditIcon = () => {
    if(this.props.currentTask && this.props.currentTask.id === this.props.task.id){
      return (<EditCurrentTask currentTask = {this.props.currentTask} editCurrentTask = {this.props.editCurrentTask}/>)
    } else {
      return null
    }}

    displayDeleteIcon = () => {
      if(this.props.currentTask && this.props.currentTask.id === this.props.task.id){
        return (<DeleteCurrentTask deleteCurrentTask = {this.props.deleteCurrentTask} currentTask = {this.props.currentTask} clearCurrentTask = {this.props.clearCurrentTask}/>)
      } else {
        return null
      }}

  displaySaveIcon = () => {
    if(this.props.currentTask && this.props.currentTask.id === this.props.task.id){
      return (<td class="selectable"><i class="save icon"></i></td>)
    } else {
      return null
    }}


  render(){
    const markCompleted = this.state.complete ? <i class="check circle outline icon"></i> : <i class="circle thin icon" ></i>

    return (
      <tr>
        <td id= "Complete" onClick={this.handleCheckTaskClick}> {markCompleted} </td>
        <td class="selectable" onClick= {this.handleSelectTaskClick}>{this.props.task.item}</td>
        {this.displayEditIcon()}
        {this.displayDeleteIcon()}
        {this.displaySaveIcon()}
      </tr>
    )
  }
}

export default Task;
