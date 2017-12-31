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
              <tr>
                <th class="one half wide" id="Complete">Status</th>
                <th class="two wide">Task</th>
                {this.props.currentTask ? <th class="one wide">Delete</th> : null}
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
