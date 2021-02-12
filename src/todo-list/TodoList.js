import React from 'react'

import TodoItem from '../todo-item/TodoItem';

export default function TodoList({ todoList, listTitle, type }) {
  const DONE_LIST_COUNT = 10;

  let processedList;

  switch(type) {
    case 'todo':
      processedList = todoList
        .filter((todo) => !todo.complete).sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'done':
      processedList = todoList
        .filter((todo) => todo.complete)
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, DONE_LIST_COUNT);
      break;
    default:
      processedList = [...todoList];
  }

  return (
    <section>
      <h2>{listTitle}</h2>
      <hr />
      {processedList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </section>
  );
}