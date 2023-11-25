import React, { useState } from 'react';
import './ToDoForm.css';

function ToDoForm({ addToDoItem }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDoItem(inputValue);
        setInputValue('');
    };

    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
                <input
                    type="text"
                    className="form-control mr-2"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add new task"
                />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default ToDoForm;
