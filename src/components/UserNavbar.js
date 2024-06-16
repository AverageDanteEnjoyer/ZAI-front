import React from 'react';
import CartIcon from './CartIcon';
import '../css/navbar.css';

const UserNavbar = () => {
    const cartItemsCount = () => {
        let count = 0;
        const cookies = document.cookie.split(';');
        cookies.forEach((cookie) => {
            if (cookie.trim().startsWith('cart-item')) {
                count++;
            }
        });
        return count;
    };

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div id="navbar">
            <div id="top-divider"></div>
            <ol id="navigation">
                <li className="logo">
                    <a className="logo-image" href="/"></a>
                </li>
                {user && user.isAdmin ? (
                    <li className="nav-item"><a href="/edit-offers">Edytuj oferty</a></li>
                ) : (
                    <>
                        <li className="nav-item"><a href="/offers">Oferty</a></li>
                        <li className="nav-item"><a href="/tickets">Moje bilety</a></li>
                        <CartIcon cartItemsCount={cartItemsCount()} />
                    </>
                )}
                <li className="nav-item highlighted-nav-item"><a href="/logout">Wyloguj się</a></li>
            </ol>
        </div>
    );
};

export default UserNavbar;
