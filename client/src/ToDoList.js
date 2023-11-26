import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import './ToDoList.css';

function ToDoList({ items, addToDoItem, deleteToDoItem, toggleComplete }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDoItem(inputValue);
        setInputValue('');
    };

    return (
        <div className="container my-5">
            <h2 className="todo-list-heading">My Tasks</h2> {/* Added header */}
            <ToDoForm onSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} />
            {items.map((item) => (
                <ToDoItem 
                    key={item.id} 
                    item={item} 
                    deleteToDoItem={deleteToDoItem} 
                    toggleComplete={toggleComplete} 
                />
            ))}
        </div>
    );
}

export default ToDoList;
