import React from 'react'
import Login from '../components/Login'
import NewTask from '../components/NewTask'
import TaskList from '../components/TaskList'


class ToDoContainer extends React.Component{
  state = {
    currentUser: null,
    tasks: []
  }

  getTasks = () => {
    fetch ('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(json => this.setState({tasks: json}))
  }

  getUser = (name) => {
    // const options = {
    //   headers: {
    //     "Content-Type": 'application/json',
    //     "Accept": 'application/json'
    //   },
    //   method: 'GET',
    //   body: JSON.stringify({email: email})
    // }
    fetch(`http://localhost:3000/beef/${name}`)
      .then(res => res.json())
      .then(json => this.setState({currentUser: json}))
  }

  componentDidMount(){
    this.getTasks()
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <div class="ui two column grid">
          <NewTask />
          <TaskList tasks={this.state.tasks}/>
        </div>
      </div>
    )
  }
}

export default ToDoContainer
