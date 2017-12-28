import React from 'react'
import Login from '../components/Login'
import NewTask from '../components/NewTask'
import TaskList from '../components/TaskList'
import ShowCurrentTask from '../components/ShowCurrentTask'
import Navbar from '../components/Navbar'


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

  clearCurrentTask = () => {
    this.setState({currentTask: null})
  }

  deleteCurrentTask = (item) => {
    let id = item.id;
    fetch(`http://localhost:3000/tasks/${id}`,{
    method: 'delete'
    })
      .then(res => res.json())
      .then(json => this.setState({tasks: json}))
  }

  // editCurrentTask = (item) => {
  //   let id = item.id;
  //   const options = {
  //     headers: {
  //       "Content-Type": 'application/json',
  //       "Accept": 'application/json'
  //     },
  //     method: 'POST',
  //     body: JSON.stringify(item)
  //   }
  //   fetch(`http://localhost:3000/tasks/${id}`,options)
  //     .then(res => res.json())
  //     .then(json => this.setState({tasks: json}))
  // }


  createTask = (item) => {
    const options = {
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(item)
    }
    fetch('http://localhost:3000/tasks',options)
      .then(res => res.json())
      .then(json => this.setState({tasks: [...this.state.tasks, json]}))
  }


  componentDidMount(){
    this.getTasks()
  }


  render(){
    console.log(this.state)
    return(
      <div>
        <Navbar />
        <div class="ui two column grid">
          <NewTask createTask={this.createTask}/>
          {
            this.state.currentTask ?
            <ShowCurrentTask
              currentTask = {this.state.currentTask}
              clearCurrentTask = {this.clearCurrentTask}
              deleteCurrentTask = {this.deleteCurrentTask}
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
