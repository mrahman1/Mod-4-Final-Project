import React from 'react'

const DeleteCurrentTask = (props) => {

  let handleDeleteClick = (event) => {
    props.deleteCurrentTask(props.currentTask),
    props.clearCurrentTask()
  }
      return (
        <td id="Delete-Icon">
          <i class="trash icon" onClick = {handleDeleteClick}></i>
        </td>
      )
}

export default DeleteCurrentTask;
