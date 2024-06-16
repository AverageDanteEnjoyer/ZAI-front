import React from 'react';
import '../css/alerts.css';

const Alert = ({ type, message }) => {
    if (!type || !message) return null;
    return (
        <div className={`alert ${type}`}>
            <span className="closebtn" onClick={(e) => e.target.parentElement.style.display = 'none'}>&times;</span>
            {message}
        </div>
    );
};

export default Alert;

