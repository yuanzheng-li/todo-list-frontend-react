import React from 'react';
import { TextField, Button } from '@material-ui/core';

import './AddTask.css';

export default function AddTask() {
  const handleSubmit = (e) => {
    // TODO
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField required id='add-task' label='Add Task' variant='outlined' size='small' />
      <Button variant='contained' color='primary' type='submit' className="add-button">
        Add
      </Button>
    </form>
  );
}
