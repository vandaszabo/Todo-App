import React, { useState } from 'react';
import CreateForm from '../components/CreateForm.js';

function CreatePage() {

    const [submitted, setSubmitted] = useState(false);
    const [cancelled, setCancelled] = useState(false);
    const [error, setError] = useState(false);

    const handleFormSubmit = async (data) => {
        try {
            if (data.title !== '') {
                const response = await fetch('http://localhost:4000/api/todo/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const res = await response.json();
                console.log(res);
                setSubmitted(true);
                setError(false);
            } else {
                setSubmitted(true);
                setError(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleCancel = async () => {
        setCancelled(true);
    };

    return (
        <>{!cancelled && (
            submitted ? (
                error ? (
                    <div className="position-absolute top-0 start-50 translate-middle-x">
                        <p className="alert alert-danger" role="alert">Title cannot be empty!</p>
                        <CreateForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
                    </div>

                ) : (
                    <div className="position-absolute top-0 start-50 translate-middle-x">
                        <p className="alert alert-success" role="alert">New todo has added</p>
                        <CreateForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
                    </div>
                )
            ) : (
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <CreateForm onSubmit={handleFormSubmit} onCancel={handleCancel}/>
                </div>
            )
            )}
        </>
    );
}

export default CreatePage;
