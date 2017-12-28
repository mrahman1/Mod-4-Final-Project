import React from 'react'

const ShowCurrentTask = (props) => {

  let handleShowAllClick = (event) => {
    return props.clearCurrentTask()
  }

  let currentItem = props.currentTask

  let handleDeleteClick = (event) => {
    props.deleteCurrentTask(currentItem),
    props.clearCurrentTask()
  }

  return (
    <div>
      <h1> {props.currentTask.item} </h1>
      <h2> {props.currentTask.priority} </h2>
      <button onClick = {handleShowAllClick}> Show All </button>
      <button onClick = {handleDeleteClick}> Delete </button>
    </div>
  )
}

export default ShowCurrentTask;
