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
        <div class="ui form" id="NewTask">
          <form onSubmit={this.handleSubmitNewTask}>
              <div class="ui input">
                <input
                type = "text"
                placeholder = "Item"
                value = {this.state.item}
                onChange = {this.handleItemChange}
              />
                <input type ="submit" />
              </div>
          </form>
          <br/>
      </div>
    )
  }
}

export default NewTask;
