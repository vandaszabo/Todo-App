import React, { useState } from 'react';
import '../App.css';

const CreateForm = ({ onSubmit, onCancel }) => {

    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [category, setCategory] = useState('');
    const [color, setColor] = useState("#563d7c");

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoData = {
            title: title,
            comment: comment,
            createdAt: createdAt,
            category: category,
            color: color
        };
        onSubmit(todoData);
        setTitle('');
        setComment('');
        setCreatedAt('');
        setCategory('');
        setColor('#563d7c');
    };

    return (
        <div style={{marginTop: '30%'}}>
            <form className="input-group mb-3" onSubmit={handleSubmit}>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <label className="form-label">
                            Title:
                            <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </label>
                    </li>

                    <li className="list-group-item"><label className="form-label">
                        Comment:
                        <input className="form-control" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </label >
                    </li>

                    <li className="list-group-item"> <label className="form-label">
                        Created At:
                        <input className="form-control" type="date" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
                    </label>
                    </li>

                    <li className="list-group-item">
                        <label className="form-label">
                            Category:
                            <select className="form-select" name="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="" disabled="disabled">Select</option>
                                <option value="Very Urgent">Very Urgent</option>
                                <option value="Urgent">Urgent</option>
                                <option value="Non-Urgent">Non-Urgent</option>
                            </select>
                        </label>
                    </li>
                    <li className="list-group-item">
                    <label htmlFor="colorInput" className="form-label">Choose color:</label>
                        <input type="color" className="form-control form-control-color" id="colorInput" value={color} onChange={(e) => setColor(e.target.value)} title="Use dark vivid color" />
                    </li>
                    <li className="list-group-item">
                        <button type="submit" className="btn btn-outline-success">Submit</button>
                        <button type="button" className="btn btn-outline-warning" onClick={onCancel}>Cancel</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default CreateForm;
