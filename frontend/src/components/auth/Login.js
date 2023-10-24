import React, { useState } from 'react';
import { Navigate, useAuth } from '../../hooks/useAuth';
import {Link, useNavigate} from 'react-router-dom'; // Import Link for routing
import './Login.css';


const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Implement your authentication logic here, e.g., API calls.
            // If authentication is successful, call the signIn method.
            const userCredentials = { email, password };
            await signIn(userCredentials);
            // Redirect to another page upon successful login if needed.
            navigate('/home');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="Login">
            <header className="Login-header">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>

                {/* Sign Up button linking to the signup page */}
                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
            </header>
        </div>
    );
};

export default Login;