import React from 'react'
import Task from './Task'
import NewTask from './NewTask'

class TaskList extends React.Component{
  state = {
    newTask: false,
    displayEditColumns: false
  }

  updateDisplay= () => {
    this.setState({displayEditColumns: !this.state.displayEditColumns})
  }

  handleNewTaskClick = () => {
    this.setState({newTask: !this.state.newTask})
  }

  render(){
    const task = this.props.tasks.map(task =>
        <Task
          task={task}
          displayEditColumns = {this.state.displayEditColumns}
          updateDisplay = {this.updateDisplay}
          deleteCurrentTask = {this.props.deleteCurrentTask}
          editCurrentTask = {this.props.editCurrentTask}
        />
    )

    const displayNewTaskForm = this.state.newTask ? <NewTask createTask={this.props.createTask}/> : null

    return(
      <div id="TaskList">
      <h2 id="Today"> Today <i class="plus icon" onClick={this.handleNewTaskClick}></i> </h2>
      {displayNewTaskForm}

        <table class="ui fixed red table" id="TaskListTable">
          <thead>
              {this.state.displayEditColumns? <tr> <th class="one half wide" id="Complete">Complete</th> <th class="two wide">Task</th><th class="one half wide">Edit</th> <th class="one half wide">Delete</th> <th class="one half wide">Save</th></tr> : <tr><th class="one half wide" id="Complete">Complete</th><th class="two wide">Task</th></tr>}
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
