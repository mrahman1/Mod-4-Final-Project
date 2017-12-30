import React from 'react'

const DeleteCurrentTask = (props) => {

  let handleDeleteClick = (event) => {
    props.deleteCurrentTask(props.currentTask),
    props.clearCurrentTask()
  }
      return (
        <td>
          <i class="trash icon" onClick = {handleDeleteClick}></i>
        </td>
      )
}

export default DeleteCurrentTask;
