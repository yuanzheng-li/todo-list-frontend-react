import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';

import './App.css';

import Header from './header/Header';
import AddTask from './add-task/AddTask';
import SearchBox from './search-box/SearchBox';
import TodoList from './todo-list/TodoList';
import fetchData from './utils/fetchData';
import ErrorSnackbar from './error-snackbar/ErrorSnackbar';

function App() {
  const [todoList, setToDoList] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [layoutBlockError, setLayoutBlockError] = useState(null);
  const [nonLayoutBlockError, setNonLayoutBlockError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      setIsLoading(true);
      setLayoutBlockError(null);
      try {
        const tasksRes = await fetchData(`${process.env.REACT_APP_TASKS_API_URL}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setToDoList(tasksRes.tasks);
      } catch(error) {
        setLayoutBlockError(error);
      }

      setIsLoading(false);
    }

    fetchTasks();
  }, []);

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

  const handleDeleteAll = async () => {
    try {
      await fetchData(`${process.env.REACT_APP_TASKS_API_URL}`, {
        method: 'delete',
      });

      setToDoList([]);
    } catch(error) {
      setNonLayoutBlockError(error);
      setOpenErrorSnackbar(true);
    }
  };

  const toggleCompleteness = (id) => {
    const updatedTodoList = todoList.map((task) => {
      return task.id === Number(id) ?
        {...task, complete: !task.complete} :
        {...task};
    });

    setToDoList(updatedTodoList);
  };

  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false);
  }

  return (
    <>
      <CssBaseline />
      <Header handleDeleteAll={handleDeleteAll} />
      <section className='add-and-search'>
        <AddTask handleAdd={handleAdd} />
        <SearchBox handleSearch={handleSearch} />
      </section>
      <main>
        {layoutBlockError && <h2>Something went wrong.</h2>}
        {!layoutBlockError &&
          (isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <TodoList
                todoList={filteredTodoList()}
                listTitle='To Do'
                type='todo'
                toggleCompleteness={toggleCompleteness}
              />
              <TodoList
                todoList={filteredTodoList()}
                listTitle='Done'
                type='done'
                toggleCompleteness={toggleCompleteness}
              />
            </>
          ))}
      </main>
      <ErrorSnackbar open={openErrorSnackbar} handleClose={handleCloseErrorSnackbar} message={nonLayoutBlockError && nonLayoutBlockError.message} />
    </>
  );
}

export default App;
