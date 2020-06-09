import React, {useState} from 'react'
import Todo1  from './Todo1'

const handleSubmit =(e, Todo, setTodo, input, setInput) => {
    e.preventDefault()
    const task = (Todo.length) ? Todo[Todo.length -1].task +1 : 1

    setTodo([...Todo, {task: task, message: input}])
    setInput('')
}

const deleteTask = (task, todo, setTodo) => {
    setTodo(todo.filter(todo1 => todo1.task !== task))
}

export default () => {
    const[Todo, setTodo] =useState([
        ])
const[input, setInput] =useState('Write your tasks here')
return(
        <div className="Todo">
            <form onSubmit={(e) => handleSubmit(e, Todo, setTodo, input, setInput)}>
                    <input onChange={(e) => setInput(e.target.value)} value={input}/>
                <button>Submit</button>
            </form>
            {Todo.map(todo1 => ( 
                <Todo1 message={todo1.message} task={todo1.task} deleteTask={(task) => deleteTask(task, Todo, setTodo)}/>
        ))}
        </div>
    )
}