import React from 'react';
import '../css/datagrid.css';

const DataGrid = ({ ticketOffers, handleEdit, handleDelete }) => {
    return (
        <div>
            <div className="grid-header">Edytuj bilety</div>
            <div id="table-container">
                <table id="virtual-table">
                    <thead>
                    <tr>
                        <th>Czas trwania</th>
                        <th>Cena</th>
                        <th>Strefa start</th>
                        <th>Strefa koniec</th>
                        <th style={{ width: '15%' }}>Akcje</th>
                    </tr>
                    </thead>
                    <tbody id="table-body">
                    {ticketOffers.map((rowData, index) => {
                        const { id, duration, price, minZone, maxZone } = rowData;
                        return (
                            <tr key={index}>
                                <td>
                                    <input
                                        required
                                        className="edit-field"
                                        name="duration"
                                        defaultValue={duration}
                                        onChange={(e) => handleEdit(id, 'duration', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        required
                                        className="edit-field"
                                        name="price"
                                        defaultValue={price}
                                        onChange={(e) => handleEdit(id, 'price', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        required
                                        className="edit-field"
                                        name="minZone"
                                        defaultValue={minZone}
                                        onChange={(e) => handleEdit(id, 'minZone', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        required
                                        className="edit-field"
                                        name="maxZone"
                                        defaultValue={maxZone}
                                        onChange={(e) => handleEdit(id, 'maxZone', e.target.value)}
                                    />
                                </td>
                                <td className="cell-item actions">
                                    <a className="x-button-wrapper" onClick={() => handleDelete(id)}>
                                        <img className="x-button" src="/Bileteo/assets/x.png" alt="Delete" />
                                    </a>
                                    <button id={`confirm-${id}`} className="btn" style={{ width: '48%', height: '8%', display: 'none' }} type="submit">
                                        Zatwierdź
                                    </button>
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

export default DataGrid;

