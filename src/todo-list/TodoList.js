import React from 'react'

import TodoItem from '../todo-item/TodoItem';

export default function TodoList({ todoList, listTitle }) {
  return (
    <section>
      <h2>{ listTitle }</h2>
      {
        todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      }
    </section>
  );
}