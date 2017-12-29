import React from 'react'
import Task from './Task'
import NewTask from './NewTask'

class TaskList extends React.Component{
  state = {
    newTask: false
  }

  render(){
    const task = this.props.tasks.map(task =>
        <Task
          task={task}
          updateCurrentTask={this.props.updateCurrentTask}
        />
    )

    return(
      <div class="ui list">
      <h2> Today <i class="plus icon"></i> </h2>
      <NewTask createTask={this.createTask}/>
        <table class="ui celled table">
          <thead>
            <tr>
              <th> Task </th>
              <th> Edit </th>
              <th> Delete </th>
              <th> Complete </th>
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
