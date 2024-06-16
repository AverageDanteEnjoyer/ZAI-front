import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';
import { login } from '../services/AuthService';
import '../css/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await login({ email, hashedPassword:password });
            if (user) {
                window.location.href = '/user-home';
            } else {
                setAlert({ type: 'error', message: 'Invalid credentials' });
            }
        } catch (error) {
            setAlert({ type: 'error', message: 'Failed to login' });
        }
    };

    return (
        <div id="page">
            <Navbar></Navbar>
            <div className="form-frame">
                <div className="form-style" style={{ width: '500px' }}>
                    <div className="form-style-heading">Zaloguj się</div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            <span>Mail</span>
                            <input required type="email" className="input-field" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label htmlFor="password">
                            <span>Hasło</span>
                            <input minlength="8" required type="password" className="input-field" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <label><input type="submit" style={{ width: '100%' }} value="Prześlij" /></label>
                        <Alert type={alert.type} message={alert.message} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
