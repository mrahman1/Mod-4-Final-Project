import React from 'react'

class ToDoContainer extends React.Component{

  getData = () => {
    fetch ('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(console.log)
  }

  render(){
    {this.getData()}

    return(
      <div>
        To Do Container!
      </div>
    )
  }
}

export default ToDoContainer
