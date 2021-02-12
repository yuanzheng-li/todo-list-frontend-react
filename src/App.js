import React, { useState } from 'react'
import { CssBaseline } from '@material-ui/core';

import './App.css';

import Header from './header/Header';
import AddTask from './add-task/AddTask';
import SearchBox from './search-box/SearchBox';
import TodoList from './todo-list/TodoList';
import tasks from './tasks.json';

function App() {
  const [todoList, setToDoList] = useState(tasks);
  const [searchField, setSearchField] = useState('');

  const handleSearch = (e) => {
    setSearchField(e.target.value)
  };

  const filteredTodoList = () => {
    return todoList.filter((todo) => todo.name.toLowerCase().includes(searchField.toLowerCase()));
  }

  const handleAdd = (name) => {
    setToDoList([...todoList, {
      id: todoList.length + 1,
      name,
      complete: false
    }]);
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <section className="add-and-search">
        <AddTask handleAdd={handleAdd} />
        <SearchBox handleSearch={handleSearch} />
      </section>
      <main>
        <TodoList todoList={filteredTodoList()} listTitle='To Do' type='todo' />
        <TodoList todoList={filteredTodoList()} listTitle='Done' type='done' />
      </main>
    </>
  );
}

export default App;
