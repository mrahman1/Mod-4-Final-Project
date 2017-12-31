import React from 'react'
import DeleteCurrentTask from './DeleteCurrentTask'
import EditTaskForm from './EditTaskForm'

class ShowCurrentTask extends React.Component {

  state = {
    complete: false,
    editTask: false
  }
  //
  // handleEditClick = (event) => {
  //   this.setState({editTask: !this.state.editTask})
  // }

  handleCheckTaskClick= (event) => {
    this.setState({complete: !this.state.complete})
  }

    render(){
      // console.log(this.props)
      // const displayEditForm = this.state.editTask ? <EditTaskForm currentTask={this.props.currentTask} editCurrentTask = {this.props.editCurrentTask}/> : null
      // {displayEditForm}
      // <i class="edit icon" onClick={this.handleEditClick}></i>
      const markCompleted = this.state.complete ? <i class="check circle outline icon"></i> : <i class="circle thin icon" ></i>

      return (
          <DeleteCurrentTask deleteCurrentTask={this.props.deleteCurrentTask} clearCurrentTask = {this.props.clearCurrentTask}/>

      )
    }
}

export default ShowCurrentTask;
