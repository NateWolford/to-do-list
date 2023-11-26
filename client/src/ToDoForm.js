import React from 'react';
import './ToDoForm.css';

function ToDoForm({ onSubmit, inputValue, setInputValue }) {
    // Removed the local useState, using props instead

    return (
        <div className="todo-form">
            <form onSubmit={onSubmit} className="d-flex justify-content-center align-items-center"> {/* Use onSubmit prop here */}
                <input
                    type="text"
                    className="form-control mr-2"
                    value={inputValue} // Controlled input using inputValue from props
                    onChange={(e) => setInputValue(e.target.value)} // Update using setInputValue from props
                    placeholder="Add new task"
                />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default ToDoForm;
