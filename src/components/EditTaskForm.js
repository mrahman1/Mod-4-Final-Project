import React from 'react'

class EditTaskForm extends React.Component {

  state = {
    item: this.props.currentTask.item,
    id: this.props.currentTask.id
  }

  handleEditTaskSubmit = (event) => {
    event.preventDefault()
    this.props.editCurrentTask(this.state)
  }

  handleItemChange = (event) => {
    this.setState({item: event.target.value})
  }

  render(){
    console.log(this.props.currentTask.item)
    return(
      <form onSubmit={this.handleEditTaskSubmit}>
        <input
          type = "text"
          placeholder = "update task"
          value = {this.state.item}
          onChange = {this.handleItemChange}
        />
        <input type = "submit"/>
      </form>
    )
  }

}

export default EditTaskForm;
