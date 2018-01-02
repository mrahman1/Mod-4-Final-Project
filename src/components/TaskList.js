import React from 'react'
import Task from './Task'

class TaskList extends React.Component{
  state = {
    displayEditColumns: false
  }

  updateDisplay= () => {
    this.setState({displayEditColumns: !this.state.displayEditColumns})
  }

  handleSortByDueDateClick = (event) => {
    this.props.sortByDueDate()
  }

  render(){
      // console.log(this.state)
    const task = this.props.tasks.map(task =>{
          return (
            <Task
              task={task}
              currentTask={this.props.currentTask}
              displayEditColumns = {this.state.displayEditColumns}
              updateDisplay = {this.updateDisplay}
              deleteCurrentTask = {this.props.deleteCurrentTask}
              editCurrentTask = {this.props.editCurrentTask}
              setCurrentTask = {this.props.setCurrentTask}
              clearCurrentTask = {this.props.clearCurrentTask}
            />
          );
        }
    )

    return(

      <div id="TaskList">


        <table class="ui fixed red table" id="TaskListTable">
          <thead>
            <tr>
                <th class="one wide" id="Complete">Status</th>
                <th class="two wide">Task </th>
                <th class="two wide">Due Date <i class="sort icon" onClick={this.handleSortByDueDateClick}></i></th>
                {this.props.currentTask ? <th class="one wide" id="Table-Delete-Header">Delete</th> : null}
                {this.props.currentTask ? <th class="two wide" id="Table-Cancel-Header">Cancel</th> : null}
              </tr>
          </thead>
          <tbody>
            {task}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TaskList
