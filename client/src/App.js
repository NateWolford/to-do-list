import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ToDoList from './ToDoList';
import MainLayout from './MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addToDoItem = (text) => {
        setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
    };

    const deleteToDoItem = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path="/todo" 
                    element={
                        <MainLayout>
                            <ToDoList 
                                items={tasks} 
                                addToDoItem={addToDoItem} 
                                deleteToDoItem={deleteToDoItem} 
                                toggleComplete={toggleComplete} 
                            />
                        </MainLayout>
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;
