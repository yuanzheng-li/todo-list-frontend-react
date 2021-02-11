import './App.css';
import Header from './header/header';
import { CssBaseline } from '@material-ui/core';
import AddTask from './add-task/AddTask';
import SearchBox from './search-box/SearchBox';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <section>
        <AddTask />
        <SearchBox />
      </section>
    </>
  );
}

export default App;
