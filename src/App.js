import './App.css';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
import FilterTask from './components/FilterTask/FilterTask';

function App() {
  return (
    <div className="App app-container">
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
}

export default App;
