import { useState } from 'react'
import Task from './components/Task'
import './App.css'
import AddTaskForm from './components/Form'
import { v4 as uuidv4 } from 'uuid';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

function App() {
    const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Medium" , done: false},
      { id:2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Low", done: false },
      { id:3, title: "Tidy up", deadline: "Today", priority: "High", done: false }
    ]
  });

    const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: ""
  });

    const [showSuccess, setShowSuccess] = useState(false);

    const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      case "priority":
        form.priority = event.target.value;
           break;
      default:
          form = formState;
    }
    setFormState(form);
  }
    
  console.log(formState);
  
    const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
    setShowSuccess(true);
  }

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

    const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  
  return (
   <div className="container">
    <Container component="main">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          backgroundColor: 'gray',
          textAlign: 'center',
          color: 'white',
          padding: '20px',
          margin: '20px 0 40px 0',
          borderRadius: '4px'
        }}
      >
        Tasky
      </Typography>
    </Container>

      <Container
        maxWidth="md"
        component="main"
        sx={{
          backgroundColor: '#f5f7ff',
          padding: { xs: 2, sm: 4 },
          border: '1px solid #c5cae9',
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Collapse in={showSuccess}>
  <Alert
    severity="success"
    onClose={() => setShowSuccess(false)}
    sx={{ mb: 2 }}
  >
    Task added successfully!
  </Alert>
</Collapse>
    <Grid
      container
      spacing={5}
      sx={{
        justifyContent: "center"
      }}
    >
      {taskState.tasks.map((task,index) => (              
      <Task 
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        priority={task.priority}
        key={task.id}
        done={task.done}
        markDone={() => doneHandler(index)}
        deleteTask = {() => deleteHandler(index)}

      />
  ))} 
   </Grid>
</Container>
  <Container
  component="footer"
  sx={{
    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
    my: 6,
    py: 6,
  }}
>
  <Grid container sx={{
    justifyContent: "center"
  }}>
       <AddTaskForm change={formChangeHandler} submit={formSubmitHandler}/>
 </Grid>
</Container>
    </div>
  )
}

export default App
