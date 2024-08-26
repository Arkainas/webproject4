import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Auth.css";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });

            const data = await response.json();
            alert(data.message);

            if (response.status === 201) {
                localStorage.setItem('userRegistered', 'true');
                history.push('/login');
            }
        } catch (error) {
            console.error('Error during registration', error)
            alert('An error occured during registration. Please try again');
        }
    };
    return (
        <div className="auth-page">
            <div className="auth-container">

                <h1>Register</h1>
                <form>
                    <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <button type="button" onClick={handleRegister}>
                    Register
                    </button>
                </form>
            </div>
        </div>
      );    
}

export default Register;