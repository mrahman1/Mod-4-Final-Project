import React from 'react'

class NewTask extends React.Component{
  state = {
    item: "",
    due_date: null,
    user_id: this.props.currentUser.id
  }

  handleSubmitNewTask= (event) => {
    event.preventDefault()
    this.props.createTask(this.state)
  }

  handleItemChange= (event) => {
    this.setState({item: event.target.value})
  }

  handleDateChange = (event) => {
    this.setState({due_date: event.target.value})
  }


  render(){
    return(
        <div class="ui form" id="NewTask">
          <form onSubmit={this.handleSubmitNewTask} >
              <div class="ui input">
                <input
                type = "text"
                size = "40"
                placeholder = "Item"
                value = {this.state.item}
                onChange = {this.handleItemChange}
              />
              </div>
              <div class="ui input">
                <input
                  type = "date"
                  placeholder = "Due Date"
                  value = {this.state.due_date}
                  onChange = {this.handleDateChange}
                />
              </div>
                <div class="ui input">
                  <input type ="submit" />
              </div>
          </form>
          <br/>
      </div>
    )
  }
}

export default NewTask;
