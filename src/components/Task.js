import React from 'react'
import ShowCurrentTask from './ShowCurrentTask'

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

  displayEditCells = () => {
    if(this.props.currentTask && this.props.currentTask.id === this.props.task.id){
      return (<td><i class="edit icon"></i></td>)
    } else {
      return null
    }}

  displayDeleteCells = () => {
    if(this.props.currentTask && this.props.currentTask.id === this.props.task.id){
      return (<td><i class="trash icon"></i></td>)
    } else {
      return null
    }}


  render(){
    // this.editCurrentTask()
    // console.log(this.props.task.id)
    // console.log(this.props.currentTask)
    const markCompleted = this.state.complete ? <i class="check circle outline icon"></i> : <i class="circle thin icon" ></i>

    return (
      <tr>
        <td id= "Complete" onClick={this.handleCheckTaskClick}> {markCompleted} </td>
        <td class="selectable" onClick= {this.handleSelectTaskClick}>{this.props.task.item}</td>
        {this.displayEditCells()}
        {this.displayDeleteCells()}
      </tr>
    )
  }
}

export default Task;
