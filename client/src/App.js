import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ToDoList from './ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
// Other imports


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/todo" element={<ToDoList />} />
            </Routes>
        </Router>
    );
}

export default App;
