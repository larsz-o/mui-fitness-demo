import React, { Component } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete'; 
import { withStyles } from '@material-ui/core/styles'

const styles = theme => console.log(theme) || ({
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 400
  }, 
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
})

export default withStyles(styles) (
  class App extends Component {
  state = {
    exercises: [
      { id: 1, title: 'Bench Press' },
      { id: 2, title: 'Deadlift' },
      { id: 3, title: 'Squats' }
    ],
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
    }); 
  }
 
  handleCreate = (event) => {
    event.preventDefault()
    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ''
      }))
    }
  }
  // end handleCreate 

  handleDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))


  render() {
    const { title, exercises } = this.state
    const { classes } = this.props
    return  (
    <Paper className={classes.root}>
        <Typography variant='display1' align='center' gutterBottom>Exercises</Typography>
        <form onSubmit={this.handleCreate}>
          <TextField 
          name='title'
          label='Exercise'
          value={title}
          onChange={this.handleChange}
          margin='normal'
      />
          <Button
          type='submit'
          color='primary'
          variant='fab'>
          Create
        </Button>
        </form>

          <List>
        {this.state.exercises.map(({ title, id }) =>
          <ListItem key={id}>
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
              <IconButton
                color='primary'
                onClick={() => this.handleDelete(id)}>
                <Delete/>
                </IconButton>
                </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    </Paper>
   
  );
  }
}
)

