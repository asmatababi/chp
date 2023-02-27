
import './App.css';
import AddTask from './AddTask';
import EditTask from './EditTask';
import Task from './Task';
import TaskList from './TaskList';

function App() {
  return (
  
    <div className="App">
  <AddTask/>
  <EditTask/>
  <Task/>    
  <TaskList/>
    </div>
  );
}

export default App;
