import React from 'react';
import '../css/footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <img id="footer-logo" src="../../assets/logo-mtd-w.svg" alt="Logo" />
            <div id="footer-menu">
                <a className="footer-menu-item">Pomoc</a>
                <a className="footer-menu-item">O firmie</a>
                <a className="footer-menu-item">Kontakt</a>
                <a className="footer-menu-item">Deklaracja RODO</a>
                <a className="footer-menu-item">Polityka cookies</a>
            </div>
            <div id="footer-company-name">© Mobile Traffic Data Sp. z o.o.</div>
        </div>
    );
};

export default Footer;

