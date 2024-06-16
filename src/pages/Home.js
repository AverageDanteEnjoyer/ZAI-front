import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SimpleSteps from '../components/SimpleSteps';
import Footer from '../components/Footer';
import '../css/stretchedPage.css';

const Home = () => {
    return (
        <div id="page" >
            <Navbar />
            <Slider />
            <SimpleSteps />
            <Footer />
        </div>
    );
};

export default Home;

