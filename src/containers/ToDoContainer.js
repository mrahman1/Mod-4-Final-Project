import React from 'react'
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
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
          },
          this.getTasks
      )
    )
  }

  getTasks = () => {
    if(this.state.currentUser){
      fetch ('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(json => {
            this.setState(
            {tasks:
                json.filter((task)=>{
                return(task.user_id === this.state.currentUser.id)})
                .sort(function (a, b) {return b.id - a.id;})
            },this.props.history.push(`/tasks`)
          )
        })
    }
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
      .then(json => {
        const found = this.state.tasks.find(task => task.id === this.state.currentTask.id)
        const index = this.state.tasks.indexOf(found)
        const newTasks = this.state.tasks.slice()
        newTasks[index] = json
        this.setState({tasks: newTasks},
          this.setState({currentTask: null})
      )
    })
  }


  // updateTasks = (array, currentValue, newValue) => {
  //   array[array.find(currentValue)] = newValue
  //   return array
  // }

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
      if(this.state.currentUser){
        return(
          <div>
            <h2 id="Today"> Todoish <i class="plus icon" onClick={this.handleNewTaskClick}></i> </h2>
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
      } else {
          return (
            <div id="oops">
              <h1> Oops you have not logged in</h1>
            </div>
          )
      }
  }

  sortedTasks = () => (this.state.sortByDueDateDescending ? this.handleSortByDueDate(this.state.tasks) : this.state.tasks)
  filteredTasks = () => (this.state.searchTerm ? this.handleFilter() : this.sortedTasks())


  render(){
    console.log(this.state)

    return(
        <div>
          <Navbar
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
            currentUser={this.state.currentUser}
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
          exact path="/"
          render={() => {
            return(
              <Login
                getUser={this.getUser}
              />
          );
        }}
        />
      </div>
    )
  }
}

export default withRouter(ToDoContainer)
