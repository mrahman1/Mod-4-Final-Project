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
  //
  // {
  //   this.state.currentTask ?
  //   <ShowCurrentTask
  //     currentTask = {this.state.currentTask}
  //     clearCurrentTask = {this.clearCurrentTask}
  //     deleteCurrentTask = {this.deleteCurrentTask}
  //   /> :
  //   <TaskList
  //     tasks={this.state.tasks}
  //     updateCurrentTask={this.updateCurrentTask}
  //   />

    render(){
      console.log(this.state)
      return (
        <div>
          <button onClick = {this.handleShowAllClick}> Show All </button>
          <button onClick = {this.handleDeleteClick}> Delete </button>
          <p onClick = {this.handleEditClick}> {this.props.currentTask.item} </p>
          {this.state.editTask ? <EditTaskForm /> : null}
        </div>
      )
    }
}

export default ShowCurrentTask;
