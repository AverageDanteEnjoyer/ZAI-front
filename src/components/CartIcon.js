import React from 'react';
import '../css/cartIcon.css';

const CartIcon = ({ cartItemsCount }) => {
    return (
        <li className="cart-container">
            <a className="cart-button" href="/cart">
                <img src='/assets/shopping-bag-icon.svg' alt="Cart" />
            </a>
            {cartItemsCount > 0 && <div className="circle">{cartItemsCount}</div>}
        </li>
    );
};

export default CartIcon;

