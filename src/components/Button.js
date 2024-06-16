import React from 'react';
import '../css/button.css';

const Button = ({ id, text, styles, type }) => {
    return <button id={id} className="btn" type={type} style={styles}>{text}</button>;
};

export default Button;

