import React, { useState } from 'react'

const Todolist = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
   function submit(e) {
    e.preventDefault();

    if(task.trim()) {
        const newTask = {
            id: Date.now(),
            Text: task,
            completed: false,
        }
        setTodos([...todos, newTask]);
        setTask("");
    }
   }
  return (
    <>
    <h2>Todo list</h2>
    <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
    <button onClick={submit}>Add</button>
    <ul>
       {
        todos.map((todo)=> (
            <li key={todo.id}>{todo.Text}</li>
        ))
       }
    </ul>
    </>
  )
}

export default Todolist;