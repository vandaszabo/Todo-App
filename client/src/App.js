import React, { useState } from 'react';
import './App.css';
import './bootstrap-cyborg.css';
import CreatePage from './pages/CreatePage.js';
import TodoTable from './components/TodoTable.js';
import addIcon from './icons/addTodo.png';
import backIcon from './icons/back.png';
import detailsIcon from './icons/details.png';

function App() {

  const [showCreate, setShowCreate] = useState(false)
  const [showTodoDetails, setShowTodoDetails] = useState(false);

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          {!showCreate ? (
            <button type="button" className='navButton' onClick={() => setShowCreate(true)}><img src={addIcon} height='50px' width='auto' alt='add' title='Create New Todo' /></button>) : (
            <button type="button" className='navButton' onClick={() => setShowCreate(false)}><img src={backIcon} height='50px' width='auto' alt='back' title='Hide Create' /></button>
          )}
        </li>

        <li className="nav-item">
          {!showTodoDetails ? (
            <button type="button" className='navButton' onClick={() => setShowTodoDetails(true)}><img src={detailsIcon} height='50px' width='auto' alt='view' title='View & Edit' /></button>) : (
            <button type="button" className='navButton' onClick={() => setShowTodoDetails(false)}><img src={backIcon} height='50px' width='auto' alt='back' title='Hide Todo list' /></button>
          )}
        </li>

      </ul>
      <div className='App-content'>
        {showCreate &&
          <div>
            <CreatePage />
          </div>}

        {showTodoDetails &&
          <div>
            <TodoTable />
          </div>}

      </div>
    </div>
  )
}

export default App;
