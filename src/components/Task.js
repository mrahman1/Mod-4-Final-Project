import React from 'react'

class Task extends React.Component{
  state = {
    clicked: false,
    complete: false
  }

  handleSelectTaskClick = (event) => {
    this.props.updateCurrentTask(this.props.task)
    this.setState({clicked: !this.state.clicked})
  }

  handleCheckTaskClick= (event) => {
    //<i class="check circle icon"></i>
    this.setState({complete: !this.state.complete})
  }

  render(){
    const markCompleted = this.state.complete ? <i class="check circle outline icon"></i> :  <i class="circle thin icon" ></i>

    return (
      <tr class="two wide">

        <td onClick={this.handleCheckTaskClick}>
          {markCompleted}
        </td>
        <td class="selectable" onClick= {this.handleSelectTaskClick}>
          {this.props.task.item}</td>
      </tr>

    )
  }
}

export default Task;
