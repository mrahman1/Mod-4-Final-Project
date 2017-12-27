import React from 'react'
import Login from '../components/Login'
import NewTask from '../components/NewTask'
import TaskList from '../components/TaskList'
import ShowCurrentTask from '../components/ShowCurrentTask'


class ToDoContainer extends React.Component{
  state = {
    currentUser: null,
    tasks: [],
    currentTask: null
  }

//user apis
  getUser = (name) => {
    fetch(`http://localhost:3000/beef/${name}`)
      .then(res => res.json())
      .then(json => this.setState({currentUser: json}))
  }

//Tasks
  getTasks = () => {
    fetch ('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(json => this.setState({tasks: json}))
  }


  updateCurrentTask = (task) => {
      this.setState({currentTask: task})
  }

  clearCurrentTask = (event) => {
    this.setState({currentTask: null})
  }
  createTask = (item) => {
    const options = {
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({item: item, user_id: 1})
    }
    fetch('http://localhost:3000/tasks',options)
      .then(res => res.json())
      .then(console.log)
  }

  componentDidMount(){
    this.getTasks()
  }


  render(){
    console.log(this.state)
    return(

      <div>
        <div class="ui two column grid">
          <NewTask createTask={this.createTask}/>
          {
            this.state.currentTask ?
            <ShowCurrentTask
              currentTask = {this.state.currentTask}
              clearCurrentTask = {this.clearCurrentTask}
            /> :
            <TaskList
              tasks={this.state.tasks}
              updateCurrentTask={this.updateCurrentTask}
            />
          }
        </div>
      </div>
    )
  }
}

export default ToDoContainer
