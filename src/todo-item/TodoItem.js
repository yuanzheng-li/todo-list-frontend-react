import React from 'react';
import { Checkbox, ListItem, ListItemText } from '@material-ui/core';

export default function TodoItem({ todo }) {
  return (
    <ListItem dense button>
      <Checkbox checked={todo.complete} name={todo.name} color='primary' />
      <ListItemText id={todo.id} primary={todo.name} />
    </ListItem>
  );
}
