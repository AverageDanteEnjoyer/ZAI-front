import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Offers from './pages/Offers';
import Cart from './pages/Cart';
import EditOffers from './pages/EditOffers';
import UserHome from './pages/UserHome';
import UserTickets from './pages/UserTickets';
import { isAuthenticated, isAdmin, getCurrentUser } from './services/AuthService';
import './css/fonts.css';
import './css/registration.css';
import './css/global.css'

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
    return isAuthenticated() && isAdmin() ? children : <Navigate to="/login" />;
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const user = getCurrentUser();
        if (user) {
            setIsLoggedIn(true);
            setAdmin(user.isAdmin);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/cart" element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                } />
                <Route path="/edit-offers" element={
                    <AdminRoute>
                        <EditOffers />
                    </AdminRoute>
                } />
                <Route path="/user-home" element={
                    <ProtectedRoute>
                        <UserHome />
                    </ProtectedRoute>
                } />
                <Route path="/user-tickets" element={
                    <ProtectedRoute>
                        <UserTickets />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
};

export default App;


