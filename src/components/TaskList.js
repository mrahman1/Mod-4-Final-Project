import React from 'react'
import Task from './Task'

class TaskList extends React.Component{

  render(){
    console.log(this.props.tasks)

    const task = this.props.tasks.map(task =>
        <Task
          task={task}
          updateCurrentTask={this.props.updateCurrentTask}
        />
    )

    return(
      <div class="column" id="TaskList">
      <h2> Heres a list of fake tasks! </h2>
        <ul>
          {task}
        </ul>
      </div>
    )
  }
}

export default TaskList
