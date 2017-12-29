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
    console.log(this.state)

    const task = this.props.tasks.map(task =>
        <Task
          task={task}
          updateCurrentTask={this.props.updateCurrentTask}
        />
    )

    const displayNewTaskForm = this.state.newTask ? <NewTask createTask={this.props.createTask}/> : null

    return(
      <div id="TaskList">
      <h2 id="Today"> Today <i class="plus icon" onClick={this.handleNewTaskClick}></i> </h2>
      {displayNewTaskForm}

        <table class="ui fixed red table" id="TaskListTable">
          <thead>
            <tr>
              <th class="one wide">Complete</th>
              <th class="two wide">Task</th>
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
