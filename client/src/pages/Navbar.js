import React from 'react';
import addIcon from '../icons/pencil2.png';
import detailsIcon from '../icons/view.png';
import '../App.css';

const Navbar = ({setShowCreate, setShowTodos}) => {

    return(
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <button onClick={()=> {setShowCreate(true); setShowTodos(false);}}><img src={addIcon} height='50px' width='auto' alt='add' title='Create New Todo' /></button>
            <button onClick={()=> {setShowTodos(true); setShowCreate(false);}}><img src={detailsIcon} height='50px' width='auto' alt='view' title='View & Edit' /></button>
        </nav>

    )
}

export default Navbar;