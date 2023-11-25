import React from 'react';
import './ToDoItem.css'; // Ensure you have this CSS file

function ToDoItem({ item, deleteToDoItem }) {
    return (
        <div className="todo-item d-flex justify-content-between align-items-center mb-2">
            <span className="todo-text">{item}</span>
            <button onClick={() => deleteToDoItem(item)} className="btn btn-sm btn-outline-danger">Delete</button>
        </div>
    );
}

export default ToDoItem;
