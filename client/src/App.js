import React, { useState } from 'react';
import './App.css';
import './bootstrap-cyborg.css';
import TodoTable from './components/TodoTable.js';
import CreatePage from './pages/CreatePage.js';

function App() {

  return (
    <div className='App-content'>
      <div className='background-img'>

        <div>
          <CreatePage />
        </div>

        <div>
          <TodoTable />
        </div>

      </div>
    </div>
  )
}

export default App;
