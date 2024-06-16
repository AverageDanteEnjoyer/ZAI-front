import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import { register } from '../services/AuthService';
import '../css/registration.css';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = { firstName, lastName, email, hashedPassword:password };
            await register(newUser);
            setAlert({ type: 'success', message: 'Registration successful' });
            window.location.href = '/login';
        } catch (error) {
            setAlert({ type: 'error', message: 'Registration failed' });
        }
    };

    return (
        <div id="page">
            <Navbar></Navbar>
            <div className="form-frame">
                <div className="form-style" style={{ width: '500px' }}>
                    <div className="form-style-heading">Zarejestruj się</div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">
                            <span>Imię</span>
                            <input required type="text" className="input-field" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </label>
                        <label htmlFor="lastName">
                            <span>Nazwisko</span>
                            <input required type="text" className="input-field" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </label>
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

export default Registration;
