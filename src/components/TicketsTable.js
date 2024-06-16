import React from 'react';
import Alert from "./Alert";
import '../css/ticketsTable.css';

const TicketsTable = ({ tickets }) => {
    return (
        <div>
            <div className="grid-header">Moje Bilety</div>
            <div id="table-container">
                <table id="virtual-table">
                    <thead>
                    <tr>
                        <th>Czas startu</th>
                        <th>Czas trwania</th>
                        <th>Cena</th>
                        <th>Strefa start</th>
                        <th>Strefa koniec</th>
                    </tr>
                    </thead>
                    <tbody id="table-body">
                    {tickets.map((ticket, index) => (
                        <tr key={index}>
                            <td>{ticket.startsAt}</td>
                            <td>{ticket.duration}</td>
                            <td>{ticket.price} zł</td>
                            <td>{ticket.minZone}</td>
                            <td>{ticket.maxZone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%', margin: '.2% 0 .9% 0', verticalAlign: 'middle' }}>
                    <Alert />
                </div>
            </div>
        </div>
    );
};

export default TicketsTable;
