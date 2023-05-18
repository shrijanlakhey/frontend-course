import React, { useState } from 'react'
import "./todo.css"
import AddComponent from '../components/todoComponents/addComponent'
import TodoItem from '../components/todoComponents/todoItem'
import { v4 } from "uuid"

const Todo = () => {
    const[todos, setTodos] = useState([
        {
            "id": v4(),
            "task": "Go to the market",
            "status": "pending",
        },
        
        {
            "id": v4(),
            "task": "Go to the college",
            "status": "pending",
        },

        {
            "id": v4(),
            "task": "Complete Assignment",
            "status": "pending",
        },

        {
            "id": v4(),
            "task": "Read Manga",
            "status": "completed",
        },
    ])
    return(
        <div id="todoContainer">
            <div id="todoBox">
                <h3 className='text-white text-center py-4'>My Todos</h3>
                <AddComponent /> {/* 'addComponent.jsx' file ko components lai import gareko*/}

                <div id="todos" className='container my-4'>
                    {/* curly braces bhitra chai html bhitra js code lekhna milxa */}
                    {
                        todos.map((i) => {
                            return <TodoItem todo={i}/>
                        })
                    } 
                </div>
            </div>
        </div>
    )
}

export default Todo