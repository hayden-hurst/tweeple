import React, { useState } from 'react';
import { Navigate, useAuth } from '../../hooks/useAuth';
import {Link, useNavigate} from "react-router-dom";
import './Signup.css';

const Signup = () => {
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            // Implement your signup logic here, e.g., API calls.
            // If signup is successful, call the signUp method.
            const userCredentials = { email, password };
            await signUp(userCredentials);
            // Redirect to another page upon successful signup if needed.
            navigate('/home');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className="Signup">
            <header className="Signup-header">
                <h2>Create Account</h2>
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
                <button onClick={handleSignup}>Create</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </header>
        </div>

    );
};

export default Signup;