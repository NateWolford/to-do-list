import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    let navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/todo");
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4" style={{ width: '400px' }}>
                <h2 className="card-title text-center">Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-group mb-3">
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
