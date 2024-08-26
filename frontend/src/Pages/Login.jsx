import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Auth.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = async() => {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            alert('Login successful');
            history.push('/');
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;