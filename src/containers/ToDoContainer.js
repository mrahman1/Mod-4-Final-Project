import React from 'react'
import Login from '../components/Login'
import NewTask from '../components/NewTask'
import TaskList from '../components/TaskList'
import Navbar from '../components/Navbar'

class ToDoContainer extends React.Component{
  state = {
    currentUser: null,
    tasks: [],
    searchTerm: null
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

  componentDidMount(){
    this.getTasks()
  }


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

//search & filter
  handleSearch = (newSearchTerm) => {
    this.setState({searchTerm: newSearchTerm})
  }

  handleFilter = () => {
    return this.state.tasks.filter(task=>{
      return task.item.includes(this.state.searchTerm)
    })
  }

//edit task
  editCurrentTask = (task) => {
    let id = task.id;
    const options = {
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(task)
    }
    fetch(`http://localhost:3000/tasks/${id}`,options)
      .then(res => res.json())
      .then(
        json => this.setState({
          tasks: this.getTasks()
        })
      )
  }

  deleteCurrentTask = (item) => {
    let id = item.id;
    fetch(`http://localhost:3000/tasks/${id}`,{
    method: 'delete'
    })
      .then(res => res.json())
      .then(json => this.setState({tasks: json}))
  }


  render(){
    let filteredTasks = this.state.searchTerm ? this.handleFilter() : this.state.tasks

    return(
      <div>
        <Navbar
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />

          <div>
              <TaskList
                tasks={filteredTasks}
                createTask={this.createTask}
                deleteCurrentTask = {this.deleteCurrentTask}
                editCurrentTask = {this.editCurrentTask}
              />
            }
        </div>

      </div>
    )
  }
}

export default ToDoContainer
