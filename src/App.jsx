import { useEffect, useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import Container from './components/Container'
import './index.css'

export let id = 0

function App() {
  const [tasks, setTasks] = useState(() => {
    return localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
  })


  return (<>
    <Header />
    <Container>
      <Input tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </Container>
  </>)
}

export default App
