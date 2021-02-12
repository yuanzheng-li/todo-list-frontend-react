import React from 'react';
import { Checkbox, ListItem, ListItemText } from '@material-ui/core';

export default function TodoItem({ todo, toggleCompleteness }) {
  const handleToggle = (id) => () => {
    toggleCompleteness(id);
  };

  return (
    <ListItem dense button onClick={handleToggle(todo.id)}>
      <Checkbox checked={todo.complete} name={todo.name} color='primary' />
      <ListItemText id={todo.id} primary={todo.name} />
    </ListItem>
  );
}
