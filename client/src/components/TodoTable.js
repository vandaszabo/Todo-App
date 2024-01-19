import React, { useState, useEffect } from 'react';
import penIcon from '../icons/pen.png';
import deleteIcon from '../icons/bin.png';

function TodoTable() {
    const [data, setData] = useState([]);
    const [fetchOver, setFetchOver] = useState(false);
    const [dataEdit, setDataEdit] = useState({});
    const [newTitle, setNewTitle] = useState('');
    const [newComment, setNewComment] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [editOver, setEditOver] = useState(false);

    const deleteFunction = async (id) => {
        console.log("Delete object:", id)
        try {
            await fetch('http://localhost:4000/api/todo/delete', {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ id: id })
            });
            const updatedData = data.filter(todo => todo._id !== id);
            setData(updatedData);
        }
        catch (err) {
            console.log(err);
        }
    };

    const editFunction = async (id) => {
        setEditOver(false)
        const editingData = data.filter(todo => todo._id === id);
        const editingObject = editingData[0]
        setDataEdit(editingObject)
        console.log("Editing: ", editingObject)
    };

    const submitFunction = async (id) => {
        setEditOver(true);
        if (newTitle !== '') {
            dataEdit.title = newTitle;
        }
        if (newComment !== '') {
            dataEdit.comment = newComment;
        }
        if (newCategory !== '') {
            dataEdit.category = newCategory;
        }

        try {
            await fetch('http://localhost:4000/api/todo/edit', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id, title: dataEdit.title, comment: dataEdit.comment, category: dataEdit.category })
            });
            const updatedList = data.map(todo => {
                if (todo._id === id) {
                    return {
                        ...todo,
                        title: newTitle,
                        comment: newComment,
                        category: newCategory
                    };
                }
                else return todo;
            })
            setData(updatedList);
            setNewComment('');
            setNewTitle('');
            setNewCategory('');

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function listFetcher() {
            try {
                const response = await fetch('http://localhost:4000/api/todo/list', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const responseData = await response.json();
                setData(responseData);
                setFetchOver(true);
            } catch (err) {
                console.log(err);
            }
        }
        listFetcher();
    }, []);

    if (!fetchOver) {
        return <div>Loading...</div>;
    }

    return (
        <div>
           <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Title</th>
                        <th>Comment</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((todo) => (
                        dataEdit != null && todo._id === dataEdit._id && !editOver ? (
                            <tr key={todo._id}>

                                <td className='title'>
                                    <input type="text" defaultValue={todo.title} onChange={(e) => {
                                        setNewTitle(e.target.value)
                                    }}></input>
                                </td>

                                <td className='comment'>
                                    <input type="text" defaultValue={todo.comment} onChange={(e) => {
                                        setNewComment(e.target.value)
                                    }}></input>
                                </td>

                                <td className='createdAt'>{todo.createdAt ? todo.createdAt.slice(0, 10) : null}</td>

                                <td className='category'>
                                    <select name="category" defaultValue={todo.category} onChange={(e) => setNewCategory(e.target.value)}>
                                        <option value="" disabled="disabled">Select</option>
                                        <option value="Very Urgent">Very Urgent</option>
                                        <option value="Urgent">Urgent</option>
                                        <option value="Non-Urgent">Non-Urgent</option>
                                    </select>
                                </td>

                                <td className='submit'>
                                    <button className='todoButton' onClick={() => submitFunction(todo._id)}>submit</button>
                                </td>

                                <td className='remove'>
                                    <button className='todoButton' onClick={() => deleteFunction(todo._id)}>remove</button>
                                </td>

                            </tr>
                        ) : (
                            <tr key={todo._id}>
                                <td className='title'>{todo.title}</td>

                                <td className='comment'>{todo.comment}</td>

                                <td className='createdAt'>{todo.createdAt ? todo.createdAt.slice(0, 10) : null}</td>
                                <td className='category'>{todo.category}</td>
                                <td className='edit'>
                                    <button className='todoButton' onClick={() => editFunction(todo._id)}>
                                        <img src={penIcon} width='auto' height='15px' alt='pen'></img>
                                    </button>
                                </td>

                                <td className='remove'>
                                    <button className='todoButton' onClick={() => deleteFunction(todo._id)}>
                                        <img src={deleteIcon} width='auto' height='15px' alt='bin'></img>
                                    </button>
                                </td>

                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default TodoTable;
