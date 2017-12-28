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
      return (
        <div>
          {this.state.editTask ? <EditTaskForm currentTask={this.props.currentTask} editCurrentTask={this.props.editCurrentTask}/> :  <p onClick = {this.handleEditClick}> {this.props.currentTask.item} </p>
           <button onClick = {this.handleShowAllClick}> Show All </button> <button onClick = {this.handleDeleteClick}> Delete</button>}
        </div>
      )
    }
}

export default ShowCurrentTask;
