import React from 'react';
import '../css/offersTable.css';

const OffersTable = ({ ticketOffers, handleAddToCart }) => {
    const isItemInCart = (id) => {
        return document.cookie.split(';').some((cookie) => cookie.trim().startsWith(`cart-item-${id}=`));
    };

    return (
        <div>
            <div className="grid-header">Oferty biletów</div>
            <div id="table-container">
                <table id="virtual-table">
                    <thead>
                    <tr>
                        <th>Czas trwania</th>
                        <th>Cena</th>
                        <th>Strefa start</th>
                        <th>Strefa koniec</th>
                        <th style={{ width: '15%' }}>Dodaj do koszyka</th>
                    </tr>
                    </thead>
                    <tbody id="table-body">
                    {ticketOffers.map((rowData, index) => {
                        const { id, duration, price, minZone, maxZone } = rowData;
                        return (
                            <tr key={index}>
                                <td>{duration}</td>
                                <td>{price} zł</td>
                                <td>{minZone}</td>
                                <td>{maxZone}</td>
                                <td className="cell-item actions">
                                    <a
                                        className="x-button-wrapper"
                                        style={isItemInCart(id) ? { opacity: 0.15, pointerEvents: 'none' } : {}}
                                        onClick={() => handleAddToCart(id)}
                                    >
                                        <img className="x-button" src="/Bileteo/assets/cart-icon.svg" alt="Add to cart" />
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OffersTable;
