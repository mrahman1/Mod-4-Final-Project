import React from 'react'
import Task from './Task'


class TaskList extends React.Component{
  state = {
    displayEditColumns: false
  }

  updateDisplay= () => {
    this.setState({displayEditColumns: !this.state.displayEditColumns})
  }


  render(){
      // console.log(this.state)
    const task = this.props.tasks.map(task =>
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
    )

    return(

      <div id="TaskList">

        <table class="ui fixed red table" id="TaskListTable">
          <thead>
              {this.props.currentTask? <tr> <th class="one half wide" id="Complete">Status</th> <th class="two wide">Task</th><th class="one half wide">Edit</th> <th class="one half wide">Delete</th> <th class="one half wide">Save</th></tr> : <tr><th class="one half wide" id="Complete">Complete</th><th class="two wide">Task</th></tr>}
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
