import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleAddTask} style={{ padding: '10px', cursor: 'pointer' }}>
        Add Task
      </button>
      <ul style={{ listStyle: 'none', padding: '0', marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ background: '#f3f3f3', padding: '10px', margin: '5px 0' }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
