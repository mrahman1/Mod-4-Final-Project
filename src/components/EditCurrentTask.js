import React from 'react'
import EditTaskForm from './EditTaskForm'

class EditCurrentTask extends React.Component {

  state = {
    editTask: false
  }

  handleEditClick = (event) => {
    this.setState({editTask: !this.state.editTask})
  }

    render(){
      // console.log(this.props)
      const displayEditForm = this.state.editTask ? <EditTaskForm currentTask={this.props.currentTask} editCurrentTask = {this.props.editCurrentTask}/> : null

      return (
        <td>
          {displayEditForm}
          <i class="edit icon" onClick={this.handleEditClick}></i>
        </td>
      )
    }
}

export default EditCurrentTask;
