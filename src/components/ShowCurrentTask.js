import React from 'react'

const ShowCurrentTask = (props) => {

  let handleShowAllClick = (event) => {
    props.clearCurrentTask
  }

  return (
    <div>
      <h1> {props.currentTask.item} </h1>
      <button onClick = {props.clearCurrentTask}> Show All </button>
    </div>
  )
}

export default ShowCurrentTask;
