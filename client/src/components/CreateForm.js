import React, { useState } from 'react';
import '../App.css';

const CreateForm = ({ onSubmit }) => {

    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoData = {
            title: title,
            comment: comment,
            createdAt: createdAt,
            category: category
        };
        onSubmit(todoData);
        setTitle('');
        setComment('');
        setCreatedAt('');
        setCategory('');
    };

    return (
        <div className="card">
            <form className="input-field-container" onSubmit={handleSubmit}>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <label>
                            Title:
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </label>
                    </li>

                    <li className="list-group-item"><label>
                        Comment:
                        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </label>
                    </li>

                    <li className="list-group-item"> <label>
                        Created At:
                        <input type="date" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
                    </label>
                    </li>

                    <li className="list-group-item">
                        <label>
                            Category:
                            <select name="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="" disabled="disabled">Select</option>
                                <option value="Very Urgent">Very Urgent</option>
                                <option value="Urgent">Urgent</option>
                                <option value="Non-Urgent">Non-Urgent</option>
                            </select>
                        </label>
                    </li>

                </ul>
                <div className="card-footer">
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;
