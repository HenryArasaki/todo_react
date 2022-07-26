import { useState } from 'react'

import './style.css'

export default function Task(props) {
    const [done, setDone] = useState(false)

    function handleDoneClick(){
        setDone(!done)
    }

    function handleDeleteClick(e){
        const updatedTasks = [...props.tasks].filter(task=>task.id != e.target.parentElement.id)
        console.log(e.target.parentElement.id)
        props.setTasks(updatedTasks)
    }

    return (
        <li key={props.id} id={props.id} >
            <button onClick={handleDoneClick}>Done</button>
            <span className={done?"done":""}>{props.name}</span>
            <button onClick={handleDeleteClick}>dekete</button>
        </li>
    )
}
