import React from 'react'

class NewTask extends React.Component{
  render(){
    return(
      <div id="NewTaskForm" class="ui column">
      <h4> Add A New Task Here </h4>
        <form>
          <input
            type = "text"
            placeholder = "Item"
          />
          <input
            type = "priority"
            placeholder = "Priority"
          />
        </form>
      </div>
    )
  }
}

export default NewTask;
