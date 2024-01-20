import React, { useState } from 'react';
import './App.css';
import './bootstrap-cyborg.css';
import CreatePage from './pages/CreatePage.js';
import TodoTable from './components/TodoTable.js';
import TodoTitles from './components/TodoTitles.js';

function App() {

  const [showTodos, setShowTodos] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [showTodoDetails, setShowTodoDetails] = useState(false);

  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          {!showCreate ? (
            <button type="button" className="btn btn-success" onClick={() => setShowCreate(true)}>Create Todo</button>) : (
            <button type="button" className="btn btn-success" onClick={() => setShowCreate(false)}>Hide Create panel</button>
          )}
        </li>

        <li class="nav-item">
          {!showTodoDetails ? (
            <button type="button" className="btn btn-info" onClick={() => setShowTodoDetails(true)}>Show todo details</button>) : (
            <button type="button" className="btn btn-info" onClick={() => setShowTodoDetails(false)}>Hide todo details</button>
          )}
        </li>

        <li class="nav-item">
          {!showTodos ? (
            <button type="button" className="btn btn-primary" onClick={() => setShowTodos(true)}>Show todos</button>) : (
            <button type="button" className="btn btn-primary" onClick={() => setShowTodos(false)}>Hide todos</button>
          )}
        </li>
      </ul>

        {showCreate &&
          <div>
            <CreatePage />
          </div>}

        {showTodos &&
          <div className="mx-auto p-2">
            <TodoTitles />
          </div>}

        {showTodoDetails &&
          <div>
            <TodoTable />
          </div>}
    </div>
  )
}

export default App;
