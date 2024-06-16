import React from 'react';
import UserNavbar from '../components/UserNavbar';
import Slider from '../components/Slider';
import SimpleSteps from '../components/SimpleSteps';
import Footer from '../components/Footer';
import '../css/stretchedPage.css';

const UserHome = () => {
    return (
        <div id="page">
            <UserNavbar />
            <Slider />
            <SimpleSteps />
            <Footer />
        </div>
    );
};

export default UserHome;
