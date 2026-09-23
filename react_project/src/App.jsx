import { useState } from 'react'
import Task from './components/Task'
import './App.css'

function App() {
    const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id:2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id:3, title: "Tidy up", deadline: "Today" }
    ]
  });

  return (
   <div className="container">
      {taskState.tasks.map((task) => (              
      <Task 
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        key={task.id}
      />
  ))} 

    </div>
  )
}

export default App
