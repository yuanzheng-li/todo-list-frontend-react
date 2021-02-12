import './App.css';
import { CssBaseline } from '@material-ui/core';

import Header from './header/Header';
import AddTask from './add-task/AddTask';
import SearchBox from './search-box/SearchBox';
import TodoList from './todo-list/TodoList';

function App() {
  const todoList = [
    {
      id: 1,
      name: 'task 1',
      complete: false,
    },
    {
      id: 2,
      name: 'task 2',
      complete: true,
    },
    {
      id: 3,
      name: 'task 3',
      complete: false,
    },
    {
      id: 4,
      name: 'task 4',
      complete: true,
    },
    {
      id: 5,
      name: 'task 5',
      complete: false,
    },
  ];

  const incompleteList = todoList.filter((todo) => !todo.complete);
  const completeList = todoList.filter((todo) => todo.complete);

  return (
    <>
      <CssBaseline />
      <Header />
      <section className="add-and-search">
        <AddTask />
        <SearchBox />
      </section>
      <main>
        <TodoList todoList={incompleteList} listTitle='To Do' />
        <TodoList todoList={completeList} listTitle='Done' />
      </main>
    </>
  );
}

export default App;
