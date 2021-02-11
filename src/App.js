import './App.css';
import Header from './header/header';
import { CssBaseline } from '@material-ui/core';
import AddTask from './add-task/AddTask';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <AddTask />
    </>
  );
}

export default App;
