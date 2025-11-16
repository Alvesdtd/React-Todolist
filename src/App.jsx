import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
        <h1>Task List</h1>
        <CustomForm />
      </div>
    
  )
}

export default App
