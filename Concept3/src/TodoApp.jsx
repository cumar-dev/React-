import React, { useReducer, useState } from 'react'
const initialState = [];
function reducer(state, action) {
    switch(action.type) {
        case "add":
            return [...state, action.payload];
         case "toggle":
            return state.map((todo)=> todo.id === action.payload ? {...todo, completed: !todo.completed}: todo);
         case "edit":
            return state.map((todo)=> todo.id === action.payload.id ? {...todo, Text: action.payload.newText}: todo);
         case "delete":
            return state.filter((todo)=> todo.id !== action.payload);
         case "ClearAll":
            return initialState;
          default:
            return state;              
    }
}
const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [task, setTask] = useState("");
    function handleAdd() {
        if(task.trim()) {
            const newAdd = {
                id: Date.now(),
                Text: task,
                completed: false
            }
            dispatch({type: "add", payload: newAdd});
            setTask("");
        }
    }
  return (
    <>
    <h2>Todo-List</h2>
    <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
    <button onClick={handleAdd}>Add</button>
    <button onClick={()=> dispatch({type: "ClearAll"})}>Clear All</button>
    <ul>
        {
            state.map((todo)=> (
                <li key={todo.id}>
                    <span
                    style={{textDecoration: todo.completed ? "line-through": "none"}}
                    onClick={()=> dispatch({type: "toggle", payload: todo.id})}
                    >
                    {todo.Text}
                    </span>
                    <button onClick={()=> {
                        const newText = prompt("Enter new text", todo.Text)
                        if(newText) {
                            dispatch({type: "edit", payload: {id: todo.id, newText}})
                        }
                        console.log("new text:", newText);
                    }}>Edit</button>
                    <button onClick={()=> dispatch({type: "delete", payload: todo.id})}>Delete</button>
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default TodoApp;