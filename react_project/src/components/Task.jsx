import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Task = (props) => {
    
    return (
        <Grid
  key={props.id}
  size={{ xs: 12, sm: 6, md: 4 }}
>
  <Card
    sx={{
      backgroundColor: props.done ? 'lightgrey' : 'lightblue',
      padding: '20px'
    }}
  >
    <CardHeader
      title={props.title}
      sx={{
        backgroundColor: 'white',
        borderRadius: '3px',
        padding: '20px',
        textAlign: 'center'
      }}
    />

    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          mb: 2,
          padding: '20px'
        }}
      >
        <Typography
          component="p"
          variant="subtitle2"
          color="text.primary"
        >
          Due: {props.deadline}
        </Typography>
      </Box>

      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        sx={{ fontStyle: 'italic' }}
      >
        {props.description}
      </Typography>

      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        sx={{ fontStyle: 'italic' }}
      >
        {props.priority}
      </Typography>
    </CardContent>

    <CardActions
      sx={{
        justifyContent: 'space-between',
        padding: '20px'
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="success"
        startIcon={<DoneIcon />}
        onClick={props.markDone}
      >
        Done
      </Button>

      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={props.deleteTask}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </CardActions>
  </Card>
</Grid>

    //     <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}> 
    //      <p className="title">{props.title}</p>
    //      <p>Due: {props.deadline}</p>
    //      <p className="description">{props.description}</p>
    //      <p
    //         className="priority"
    //         style={{
    //             backgroundColor: props.priority === 'High' ? 'red' : props.priority === 'Medium' ? 'yellow' : 'green'
    //         }}
    //      >
    //         {props.priority}
    //      </p>
    //      <button onClick={props.markDone} className='doneButton'>Done</button>
    //      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

    // </div>
    )
}

export default Task;
