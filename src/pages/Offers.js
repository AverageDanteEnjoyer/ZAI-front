import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserNavbar from '../components/UserNavbar';
import OffersTable from '../components/OffersTable';
import Footer from '../components/Footer';
import { getAll } from '../services/TicketOfferService';
import '../css/stretchedPage.css';

const Offers = () => {
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

    const handleAddToCart = (id) => {
        document.cookie = `cart-item-${id}=true; path=/`;
        setTicketOffers([...ticketOffers]);
    };

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div id="page">
            {user ? <UserNavbar /> : <Navbar />}
            <OffersTable ticketOffers={ticketOffers} handleAddToCart={handleAddToCart} />
            <Footer />
        </div>
    );
};

export default Offers;
