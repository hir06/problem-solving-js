import { useState } from "react";
import './Todos.scss'
export default function Todos() {
    type todoType = {
        id: number,
        name: string,
        isDeleted: boolean
    }
    const [todos, setTods] = useState<todoType[]>([])
    const [input, setInput] = useState<string>('')
    const handleChange = () => {
       const  newTodo : todoType = {
            id: Number(todos.length +1),
            name: input,
            isDeleted: false
        }
        const tos = [...todos, newTodo]
        setTods(tos)
        setInput('')
    }
    const handleDelete = (id: todoType["id"]) => {
        setTods(prevTodos => {
            return prevTodos.map((todo) => {
                return todo.id === id ? { ...todo, isDeleted: !todo.isDeleted } : todo;
            });
        })
    }
    return(
        <div className="container">
            <input type="text" value={input} role="add-todo-item" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleChange}>Add</button>
            <ul>
                { todos.map((item) => <li key={item.id}>{item.name} <button onClick={() => handleDelete(item.id)}>Delete</button></li>)}
            </ul>
        </div>
    )
}