import React, { useState, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import TicketsTable from '../components/TicketsTable';
import Footer from '../components/Footer';
import { getAll } from '../services/TicketOfferService';
import '../css/stretchedPage.css';

const UserTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await getAll();
                setTickets(response.data);
            } catch (error) {
                console.error('Failed to fetch tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div id="page">
            <UserNavbar />
            <TicketsTable tickets={tickets} />
            <Footer />
        </div>
    );
};

export default UserTickets;
