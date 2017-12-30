import React from 'react'
import EditCurrentTask from './EditCurrentTask'
import DeleteCurrentTask from './DeleteCurrentTask'


class ShowCurrentTask extends React.Component {

  state = {
    item: this.props.currentTask.item,
    id: this.props.currentTask.id
  }

  render(){
    const editCurrentTask = this.props.taskSelected ? <EditCurrentTask task={this.props.task}/> : null
    const deleteCurrentTask = this.props.taskSelected ? <DeleteCurrentTask/> : null

    console.log(this.props)
    return(
      <div></div>
    )
  }

}

export default ShowCurrentTask;
