import React, { useState } from 'react'
import "./todo.css"
import AddComponent from '../components/todoComponents/addComponent'
import TodoItem from '../components/todoComponents/todoItem'
import { v4 } from "uuid"

const Todo = () => {
    // todos = variable, setTodos = function
    const[todos, setTodos] = useState([
        {
            "id": v4(),
            "task": "Go to the market",
            "status": "pending",
        },
        
        {
            "id": v4(),
            "task": "Go to the college",
            "status": "completed",
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

    const addTodo = (task) => {
        let newTodo = {
            "id": v4(),
            "task": task,
            "status": "pending",
        }
        setTodos([...todos, newTodo]) // newTodo lai add gareko todos bhanne list of dictionary mah mah
    }

    const updateTodo = (clickedTodo) => {
        let updatedTodos = todos.map((todo) => {
            console.log(todo)
           if (clickedTodo.id == todo.id){
                if (todo.status == "completed"){
                    todo.status = "pending"
                }else{
                    todo.status = "completed"
                }
                
                return todo
           }
           return todo
        })
        setTodos(updatedTodos)
    }
    return(
        <div id="todoContainer">
            <div id="todoBox">
                <h3 className='text-white text-center py-4'>My Todos</h3>
                <AddComponent addTodo={addTodo} /> {/* 'addComponent.jsx' file ko components lai import gareko*/}

                <div id="todos" className='container my-4'>
                    {/* curly braces bhitra chai html bhitra js code lekhna milxa */}
                    {
                        todos.map((i) => {
                            return <TodoItem todo={i} updateTodo={updateTodo} />
                        })
                    } 
                </div>
            </div>
        </div>
    )
}

export default Todo