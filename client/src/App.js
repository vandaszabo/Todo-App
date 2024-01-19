import React, { useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage.js';
import CreatePage from './pages/CreatePage.js';

function App() {

  const [showTodos, setShowTodos] = useState(false)

  const showTodosFunction = () => {
    setShowTodos(true);
  }
  const hideTodosFunction =() =>{
    setShowTodos(false)
  }
  return (
    <div className='containerDiv'>
      {showTodos ? (
          <>
            <button type="button" className="btn btn-info position-absolute bottom-0 start-50 translate-middle-x" onClick={hideTodosFunction}>hide todos</button>
            <MainPage />
          </>
        ) : (
          <>
            <CreatePage />
            <button type="button" className="btn btn-info position-absolute top-50 start-50 translate-middle" onClick={showTodosFunction}> show todos</button>
          </>
        )
      }
    </div>
  )
}

export default App;
