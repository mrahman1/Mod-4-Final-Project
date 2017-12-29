import React from 'react'
import EditTaskForm from './EditTaskForm'

class EditCurrentTask extends React.Component {

  state = {
    editTask: false
  }

  // handleShowAllClick = (event) => {
  //   this.props.clearCurrentTask()
  // }
  //
  // handleDeleteClick = (event) => {
  //   this.props.deleteCurrentTask(this.props.currentTask),
  //   this.props.clearCurrentTask()
  // }
  //
  // handleEditClick = (event) => {
  //   this.setState({editTask: !this.state.editTask})
  // }


    render(){
      console.log(this.props)
      // const displayEditForm = this.state.editTask ? <EditTaskForm currentTask={this.props.currentTask} editCurrentTask={this.props.editCurrentTask} editTaskStatus={this.handleEditClick}/> : <p onClick = {this.handleEditClick}> {this.props.currentTask.item} </p>

      // <button onClick = {this.handleDeleteClick}> Delete</button>
      // {displayEditForm}
      // <button onClick = {this.handleShowAllClick}>Show All</button>
        // <td id= "Complete" onClick={this.props.handleCheckTaskClick}> {this.props.markCompleted} </td>
        //  <td class="selectable" onClick= {this.props.handleSelectTaskClick}>{this.props.task.item}</td>
          //  <td><i class="edit icon"></i></td>

      return (
        <td>
          <i class="edit icon"></i>
        </td>
      )
    }
}

export default EditCurrentTask;
