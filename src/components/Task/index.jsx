import { useState,useEffect } from 'react'

import './style.css'

import trashCan from "../../assets/trash_svg.svg"

export default function Task(props) {
    const [done, setDone] = useState(props.done)

    useEffect(()=>{
        props.tasks.map(element=>{
            if (element.id == props.id){
                element.done = done
            }
        })
        const updatedTasks = [...props.tasks]
        localStorage.setItem("tasks",JSON.stringify(updatedTasks))
    },[done])

    function handleDoneClick(){
        setDone(!done)
    }

    function handleDeleteClick(e){
        const updatedTasks = [...props.tasks].filter(task=>task.id != e.target.parentElement.parentElement.id)
        props.setTasks(updatedTasks)
    }

    return (
        <li key={props.id} id={props.id} >
            <button className={done?"btnDoneDone btnDone":"btnDone"} onClick={handleDoneClick}></button>
            <span className={done?"done taskName":"taskName"}>{props.name}</span>
            <button className="btnDelete" onClick={handleDeleteClick}>
                <img className={done? "trashIcon trashDone": "trashIcon"} src={trashCan} alt="trash can icon"/>
            </button>
        </li>
    )
}
