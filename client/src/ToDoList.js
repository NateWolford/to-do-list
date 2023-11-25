import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import './ToDoList.css';

function ToDoList() {
    const [items, setItems] = useState([]);

    const addToDoItem = (item) => {
        setItems([...items, item]);
    };

    const deleteToDoItem = (itemToDelete) => {
        setItems(items.filter(item => item !== itemToDelete));
    };

    return (
        <div className="container my-5">
            <div className="todo-list-container">
                <div className="todo-list-header">
                    <h2 className="todo-list-heading">My Tasks</h2>
                </div>
                <ToDoForm addToDoItem={addToDoItem} />
                {items.map((item, index) => (
                    <ToDoItem key={index} item={item} deleteToDoItem={deleteToDoItem} />
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
