import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from '../components/Login'
import NewTask from '../components/NewTask'
import TaskList from '../components/TaskList'
import Navbar from '../components/Navbar'

class ToDoContainer extends React.Component{
  state = {
    currentUser: null,
    tasks: [],
    searchTerm: null,
    currentTask: null,
    newTask: false,
    sortByDueDateDescending: false
  }

//user apis
  getUser = (name) => {
    fetch(`http://localhost:3000/beef/${name}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          currentUser: json,
          tasks: this.getTasks()
        })
    )
  }

//Tasks
  getTasks = () => {
    fetch ('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(json => {
        if(this.state.currentUser){
          this.setState(
          {tasks:
              json.filter((task)=>{
              return(task.user_id === this.state.currentUser.id)})
              .sort(function (a, b) {return b.id - a.id;})
          })
        }
      })
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
      .then(json => this.setState({tasks: [json,...this.state.tasks]}))
  }

//search & filter
  handleSearch = (newSearchTerm) => {
    this.setState({searchTerm: newSearchTerm})
  }

   handleSortByDueDate= (array) => {
      return (array.sort(function(task1,task2){
        return new Date(task1.due_date) - new Date(task2.due_date)
      }))
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
      .then(this.getTasks)
      // .then(json => this.setState({
      //   tasks: this.updateTasks([...this.state.tasks],this.state.currentTask.id, json)
      // }))
  }

  updateTasks = (array, currentValue, newValue) => {
    array[array.indexOf(currentValue)] = newValue
    return array
  }

  deleteCurrentTask = (item) => {
    let id = item.id;
    fetch(`http://localhost:3000/tasks/${id}`,{
    method: 'delete'
    })
      .then(res => res.json())
      .then(json => this.setState({tasks: json}))
  }

  setCurrentTask = (task) => {
    this.setState({currentTask: task})
  }

  clearCurrentTask = () => {
    this.setState({currentTask: null})
  }

  handleNewTaskClick = () => {
    this.setState({newTask: !this.state.newTask})
  }

  sortByDueDate = () => {
    this.setState({
      sortByDueDateDescending: !this.state.sortByDueDateAscending,
    })
  }

  // updateCurrentUser = (user) => {this.setState({currentUser: user })}

  displayNewTaskForm = () => {
     return this.state.newTask ? <NewTask createTask={this.createTask} currentUser={this.state.currentUser}/> : null
  }

  TaskListComponent=()=>{
    return(
      <div>
        <h2 id="Today"> Today <i class="plus icon" onClick={this.handleNewTaskClick}></i> </h2>
        {this.displayNewTaskForm()}
        <TaskList
          tasks={this.filteredTasks()}
          createTask={this.createTask}
          deleteCurrentTask = {this.deleteCurrentTask}
          editCurrentTask = {this.editCurrentTask}
          currentTask = {this.state.currentTask}
          setCurrentTask = {this.setCurrentTask}
          displayEditCells = {this.displayEditCells}
          clearCurrentTask = {this.clearCurrentTask}
          sortByDueDate = {this.sortByDueDate}
        />
      </div>
    )
  }

  sortedTasks = () => (this.state.sortByDueDateDescending ? this.handleSortByDueDate(this.state.tasks) : this.state.tasks)
  filteredTasks = () => (this.state.searchTerm ? this.handleFilter() : this.sortedTasks())


  render(){
    console.log(this.state)

    return(
      <Router>
        <div>
          <Navbar
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
          />
          <Route
            exact path="/"
            render={() => {
              return(
                this.TaskListComponent()
              );
            }}
          />

          <Route
            exact path="/tasks"
            render={() => {
              return(
                this.TaskListComponent()
            );
          }}
          />

        <Route
          exact path="/login"
          render={() => {
            return(
              <Login
                getUser={this.getUser}
              />
          );
        }}
        />

      </div>
      </Router>
    )
  }
}

export default ToDoContainer
