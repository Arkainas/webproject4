import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Auth.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async() => {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                alert('Login successful');
                navigate('/')
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during login', error);
            alert('An error occured during login. Please try again.')
        }
    };

    return (
        <div className="auth-page">
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
        </div>
    );
}
export default Login;