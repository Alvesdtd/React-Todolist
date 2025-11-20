import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>{
    setTasks([task, ...tasks])
  }

  return (
      <div className="container">
        <h1>Task List</h1>
        <CustomForm addTask={addTask} tasks={tasks} />
        {tasks && <TaskList tasks={tasks} />}
      </div>
  )
}

export default App
