import React, { useState } from 'react';
import { create } from '../services/TicketOfferService';
import Button from "./Button";
import Alert from "./Alert";
import '../css/addOfferForm.css';

const AddOfferForm = () => {
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [minZone, setMinZone] = useState('');
    const [maxZone, setMaxZone] = useState('');
    const [alert, setAlert] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOffer = { duration, price, minZone, maxZone };
        try {
            await create(newOffer);
            setAlert({ type: 'success', message: 'Offer created successfully!' });
        } catch (error) {
            setAlert({ type: 'error', message: 'Failed to create offer!' });
        }
    };

    return (
        <div className="form-wrapper">
            <div className="header">Dodaj bilet</div>
            <form id="form" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="duration">Czas trwania</label></td>
                        <td><label htmlFor="price">Cena</label></td>
                        <td><label htmlFor="min_zone">Strefa start</label></td>
                        <td><label htmlFor="max_zone">Strefa koniec</label></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" className="input-field" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                        </td>
                        <td>
                            <input type="text" className="input-field" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </td>
                        <td>
                            <input type="text" className="input-field" name="min_zone" value={minZone} onChange={(e) => setMinZone(e.target.value)} required />
                        </td>
                        <td>
                            <input type="text" className="input-field" name="max_zone" value={maxZone} onChange={(e) => setMaxZone(e.target.value)} required />
                        </td>
                    </tr>
                </table>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <Button id="add-offer-button" text="Dodaj" styles={{ width: '20%', margin: '10px 0' }} type="submit" />
                </div>
                <Alert type={alert.type} message={alert.message} />
            </form>
        </div>
    );
};

export default AddOfferForm;

