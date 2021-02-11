import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function AddTask() {
  const handleSubmit = (e) => {
    // TODO
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField required id='add-task' label='Add Task' variant='outlined' />
      <Button variant='contained' color='primary' type='submit'>
        Add
      </Button>
    </form>
  );
}
