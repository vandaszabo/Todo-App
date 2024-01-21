import React, { useState } from 'react';
import './App.css';
import './bootstrap-journal.css';
import TodoTable from './components/TodoTable.js';
import CreatePage from './pages/CreatePage.js';
import Navbar from './pages/Navbar.js';

function App() {

  const [showTodos, setShowTodos] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className='App-content'>
      <div className='background-img'>
      <Navbar setShowTodos={setShowTodos} setShowCreate={setShowCreate}/>

        <div>
          <CreatePage setShowCreate={setShowCreate} showCreate={showCreate} />
        </div>

        <div>
          <TodoTable setShowTodos={setShowTodos} showTodos={showTodos} />
        </div>

      </div>
    </div>
  )
}

export default App;
