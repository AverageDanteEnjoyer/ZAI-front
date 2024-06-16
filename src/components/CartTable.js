import React from 'react';
import '../css/cartTable.css';

const CartTable = ({ ticketOffers, handleRemove }) => {
    let total = 0;

    return (
        <div>
            <div className="grid-header">Koszyk</div>
            <div id="table-container">
                <table id="virtual-table">
                    <thead>
                    <tr>
                        <th>Czas trwania</th>
                        <th>Cena</th>
                        <th>Strefa start</th>
                        <th>Strefa koniec</th>
                        <th style={{ width: '15%' }}>Czas startu</th>
                        <th className="actions">Usuń</th>
                    </tr>
                    </thead>
                    <tbody id="table-body">
                    {ticketOffers.map((rowData, index) => {
                        const { id, duration, price, minZone, maxZone } = rowData;
                        total += parseInt(price, 10);
                        return (
                            <tr key={index}>
                                <td>{duration}</td>
                                <td>{price} zł</td>
                                <td>{minZone}</td>
                                <td>{maxZone}</td>
                                <td>
                                    <input
                                        required
                                        className="edit-field date-field"
                                        defaultValue={document.cookie[`cart-item-${id}`] || ''}
                                        onBlur={(e) => document.cookie = `cart-item-${id}=${e.target.value}; path=/`}
                                        pattern="\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}"
                                    />
                                </td>
                                <td className="cell-item actions">
                                    <a className="x-button-wrapper" onClick={() => handleRemove(id)}>
                                        <img className="x-button" src="/assets/x.png" alt="Remove" />
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <div className="total">W sumie: {total} zł</div>
        </div>
    );
};

export default CartTable;

