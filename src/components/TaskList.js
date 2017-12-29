import React from 'react'
import Task from './Task'
import NewTask from './NewTask'

class TaskList extends React.Component{
  state = {
    newTask: false
  }

  handleNewTaskClick = () => {
    this.setState({newTask: !this.state.newTask})
  }

  render(){
    // console.log(this.props)
    const task = this.props.tasks.map(task =>
        <Task
          task={task}
          updateCurrentTask={this.props.updateCurrentTask}
          currentTask = {this.props.currentTask}
          clearCurrentTask = {this.props.clearCurrentTask}
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
              {this.props.currentTask ? <tr> <th class="one half wide" id="Complete">Complete</th> <th class="two wide">Task</th><th class="one half wide">Edit</th> <th class="one half wide">Delete</th> </tr> : <tr><th class="one half wide" id="Complete">Complete</th><th class="two wide">Task</th></tr>}
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
