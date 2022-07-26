import { useState, useEffect } from 'react'
import { id } from '../../App'

import './style.css'

export default function Input(props) {
    const [text, setText] = useState("")

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(props.tasks))
    }, [props.tasks])

    function handleInputChange(e) {
        setText(e.target.value)
    }

    function handleSubmitClick(e) {
        e.preventDefault()
        if (text != "") {
            props.setTasks([...props.tasks, { name: text, completed: false, id: (Math.random().toString(16).slice(2))}])
            setText("")
        }
    }



    return (
        <form onSubmit={handleSubmitClick}>
            <label htmlFor="taskInput">Tarefa</label>
            <input type="text" name="taskInput" id="taskInput" onChange={handleInputChange} value={text} />
            <button type="submit">Enviar</button>
        </form>
    )
}