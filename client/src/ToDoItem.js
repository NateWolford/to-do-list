import React from 'react';
import './ToDoItem.css';

function ToDoItem({ item, deleteToDoItem, toggleComplete }) {
    return (
        <div className="todo-item-container">
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={item.completed} 
                    onChange={() => toggleComplete(item.id)}
                    className={`todo-checkbox ${item.completed ? 'completed' : ''}`}
                />
                <span className={`todo-text ${item.completed ? 'completed' : ''}`}>
                    {item.text}
                </span>
                <button onClick={() => deleteToDoItem(item.id)} className="btn btn-sm btn-danger delete-button">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ToDoItem;
