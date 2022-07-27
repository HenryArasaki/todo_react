import Task from '../Task'

export default function List(props) {

    return (
        <ul>
            {props.tasks.map(task=>{
                return <Task done={task.done} key={task.id} id={task.id} name={task.name} tasks={props.tasks} setTasks={props.setTasks} />
            })}
        </ul>
    )
}