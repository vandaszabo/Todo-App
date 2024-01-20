import React, { useState, useEffect } from 'react';

function TodoTitles() {
    const [data, setData] = useState([]);
    const [fetchOver, setFetchOver] = useState(false);

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
        <div className='title-list' style={{maxWidth: '300px'}}>
            <ul className="list-group">
                {data.map(todo => (
                    <li className="list-group-item" key={todo._id} style={{ backgroundColor: todo.color }}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TodoTitles;
