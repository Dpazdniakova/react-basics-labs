import { useState } from 'react'
import Task from './components/Task'
import './App.css'

function App() {
  return (
  <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty.." />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away" > </Task>
      <Task title="Tidy" deadline="Today" description="Empty.."/>
    </div>
  )
}

export default App
