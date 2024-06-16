import React, { useState, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import AddOfferForm from '../components/AddOfferForm';
import DataGrid from '../components/DataGrid';
import Footer from '../components/Footer';
import { getAll, remove, create } from '../services/TicketOfferService';

const EditOffers = () => {
    const [ticketOffers, setTicketOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await getAll();
                setTicketOffers(response.data);
            } catch (error) {
                console.error('Failed to fetch ticket offers:', error);
            }
        };

        fetchOffers();
    }, []);

    const handleAdd = async (newOffer) => {
        try {
            const response = await create(newOffer);
            setTicketOffers([...ticketOffers, response.data]);
        } catch (error) {
            console.error('Failed to create ticket offer:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await remove(id);
            setTicketOffers(ticketOffers.filter((offer) => offer.id !== id));
        } catch (error) {
            console.error('Failed to delete ticket offer:', error);
        }
    };

    const handleEdit = (id, key, value) => {
        setTicketOffers(ticketOffers.map((offer) => (offer.id === id ? { ...offer, [key]: value } : offer)));
    };

    return (
        <div id="page">
            <UserNavbar />
            <AddOfferForm handleAdd={handleAdd} />
            <DataGrid ticketOffers={ticketOffers} handleEdit={handleEdit} handleDelete={handleDelete} />
            <Footer />
        </div>
    );
};

export default EditOffers;
