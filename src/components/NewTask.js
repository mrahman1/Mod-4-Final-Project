import React from 'react'

class NewTask extends React.Component{
  state = {
    item: "",
    user_id: 1
  }

  handleSubmitNewTask= (event) => {
    event.preventDefault()
    this.props.createTask(this.state)
  }

  handleItemChange= (event) => {
    this.setState({item: event.target.value})
  }

  render(){
    return(
      <div id="NewTaskForm" class="ui column">
      <h4> Add A New Task Here </h4>
        <form onSubmit={this.handleSubmitNewTask}>
          <input
            type = "text"
            placeholder = "Item"
            value = {this.state.item}
            onChange = {this.handleItemChange}
          />
          <input
            type = "priority"
            placeholder = "Priority"
          />
          <br/>
          <input
            type = "submit"
            placeholder = "submit"
          />
        </form>
      </div>
    )
  }
}

export default NewTask;
