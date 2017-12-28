import React from 'react'
import EditTaskForm from './EditTaskForm'

class ShowCurrentTask extends React.Component {

  state = {
    editTask: false
  }

  handleShowAllClick = (event) => {
    this.props.clearCurrentTask()
  }

  handleDeleteClick = (event) => {
    this.props.deleteCurrentTask(this.props.currentTask),
    this.props.clearCurrentTask()
  }

  handleEditClick = (event) => {
    this.setState({editTask: !this.state.editTask})
  }


    render(){
      const displayEditForm = this.state.editTask ? <EditTaskForm currentTask={this.props.currentTask} editCurrentTask={this.props.editCurrentTask} editTaskStatus={this.handleEditClick}/> : <p onClick = {this.handleEditClick}> {this.props.currentTask.item} </p>

      return (
          <div>
          <button onClick = {this.handleShowAllClick}>Show All</button>
          <button onClick = {this.handleDeleteClick}> Delete</button>
          {displayEditForm}
          </div>
      )
    }
}

export default ShowCurrentTask;
