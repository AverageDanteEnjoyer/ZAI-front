import React, { useState } from 'react';
import '../css/datagrid.css';
import { update } from '../services/TicketOfferService';

const DataGrid = ({ ticketOffers, handleEdit, handleDelete }) => {
    const [showConfirm, setShowConfirm] = useState({});
    const [editedOffers, setEditedOffers] = useState({}); // State to store edited offers

    const handleChange = (id, field, value) => {
        handleEdit(id, field, value);
        setEditedOffers(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                [field]: value
            }
        }));
        setShowConfirm(prevState => ({
            ...prevState,
            [id]: true
        }));
    };

    const handleUpdate = async (id) => {
        if (editedOffers[id]) {
            try {
                await update(id, editedOffers[id]);
                alert('Update successful');
                setShowConfirm(prevState => ({
                    ...prevState,
                    [id]: false
                }));
            } catch (error) {
                alert('Update failed');
                console.error(error);
            }
        }
    };

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
                                        onChange={(e) => handleChange(id, 'duration', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        required
                                        className="edit-field"
                                        name="price"
                                        defaultValue={price}
                                        onChange={(e) => handleChange(id, 'price', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        required
                                        className="edit-field"
                                        name="minZone"
                                        defaultValue={minZone}
                                        onChange={(e) => handleChange(id, 'minZone', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        required
                                        className="edit-field"
                                        name="maxZone"
                                        defaultValue={maxZone}
                                        onChange={(e) => handleChange(id, 'maxZone', e.target.value)}
                                    />
                                </td>
                                <td className="cell-item actions">
                                    <a className="x-button-wrapper" onClick={() => handleDelete(id)}>
                                        <img className="x-button" src="/assets/x.png" alt="Delete" />
                                    </a>
                                    <button
                                        id={`confirm-${id}`}
                                        className="btn"
                                        style={{ width: '48%', height: '8%', display: showConfirm[id] ? 'block' : 'none' }}
                                        type="button"
                                        onClick={() => handleUpdate(id)} // Call handleUpdate on click
                                    >
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
