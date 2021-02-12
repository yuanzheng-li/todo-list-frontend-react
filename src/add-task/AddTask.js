import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import './AddTask.css';

export default function AddTask({ handleAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(name);
    setName('');
  };

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        value={name}
        onChange={handleChange}
        required
        id='add-task'
        label='Add Task'
        variant='outlined'
        size='small' />
      <Button
        disabled={ name.length === 0 }
        variant='contained'
        color='primary'
        type='submit'
        className="add-button"
      >
        Add
      </Button>
    </form>
  );
}
