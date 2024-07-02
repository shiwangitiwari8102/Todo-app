// src/App.jsx
import React from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
