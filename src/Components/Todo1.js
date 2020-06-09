import React from 'react'

export default ({message, task, deleteTask}) => (
    <div className="todo1">
        <p>{message} | Task: {task}</p>
        <div><button onClick={() => deleteTask(task)}>Delete this Task</button>
        </div>
    </div>
)