import React from 'react'

class Task extends React.Component{
  state = {
    clicked: false
  }

  handleClicked = (event) => {
    this.props.updateCurrentTask(this.props.task)
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return (
      <tr>
        <td class="selectable" onClick= {this.handleClicked}>{this.props.task.item}</td>
        <td class="selectable"> <i class="edit icon"></i> </td>
        <td class="selectable"> <i class="trash icon"> </i> </td>
        <td class="selectable"> <i class="check circle icon"></i> </td>
      </tr>

    )
  }
}

export default Task;
