import { useState } from 'react'
import Task from './components/Task'
import './App.css'

function App() {
    const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Medium" },
      { id:2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Low" },
      { id:3, title: "Tidy up", deadline: "Today", priority: "High" }
    ]
  });

  return (
   <div className="container">
      {taskState.tasks.map((task) => (              
      <Task 
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        priority={task.priority}
        key={task.id}
      />
  ))} 

    </div>
  )
}

export default App
