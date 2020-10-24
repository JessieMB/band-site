import React from 'react';
import './Footer.css';
const Footer = (props: any) => {
    let currentYear = new Date().toISOString().split('-')[0]
    return (
        <footer className="Footer">
            COPYRIGHT © INSURRECTOR {currentYear}
        </footer>
    );
}

export default Footer;