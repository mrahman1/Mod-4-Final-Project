import React from 'react'

class EditTaskForm extends React.Component {

  state = {
    item: this.props.currentTask.item,
    id: this.props.currentTask.id
  }

  handleEditTaskSubmit = (event) => {
    event.preventDefault()
    this.props.editCurrentTask(this.state)
    //this.props.clearCurrentTask()
  }

  handleItemChange = (event) => {
    this.setState({item: event.target.value})
  }

  render(){
    console.log(this.state)
    return(
      <td>
        <form onSubmit={this.handleEditTaskSubmit}>
          <input
            id = "edit-input"
            type = "text"
            placeholder = "update task"
            value = {this.state.item}
            onChange = {this.handleItemChange}
          />
        </form>
      </td>
    )
  }

}

export default EditTaskForm;
