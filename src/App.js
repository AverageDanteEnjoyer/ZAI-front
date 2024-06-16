import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Offers from './pages/Offers';
import Cart from './pages/Cart';
import EditOffers from './pages/EditOffers';
import UserHome from './pages/UserHome';
import UserTickets from './pages/UserTickets';
import './css/global.css'
import './css/fonts.css'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(true);
            setIsAdmin(user.isAdmin);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/edit-offers" element={<EditOffers />} />
                <Route path="/user-home" element={<UserHome />} />
                <Route path="/user-tickets" element={<UserTickets />} />
            </Routes>
        </Router>
    );
};

export default App;
