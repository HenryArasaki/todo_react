import { useEffect, useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import './index.css'

export let id = 0

function App() {
  const [tasks, setTasks] = useState(()=>{
    return localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
  })


  return (<>
    <Header />
    <Input tasks={tasks} setTasks={setTasks} />
    <List tasks={tasks} setTasks={setTasks}/>
  </>)
}

export default App
