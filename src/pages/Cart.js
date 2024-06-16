import React, { useState, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import CartTable from '../components/CartTable';
import Footer from '../components/Footer';
import { getAll } from '../services/TicketOfferService';

const Cart = () => {
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

    const handleRemove = (id) => {
        document.cookie = `cart-item-${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        setTicketOffers(ticketOffers.filter((offer) => offer.id !== id));
    };

    return (
        <div id="page">
            <UserNavbar />
            <CartTable ticketOffers={ticketOffers} handleRemove={handleRemove} />
            <Footer />
        </div>
    );
};

export default Cart;

