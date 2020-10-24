import React from 'react';
import logo from '../../assets/logo.png';
import './Logo.css';

const Logo = (props: any) => {
    return (
        <div className='logo'>
            <a href="localhost:3000">
            <img src={logo}/>
            </a>
        </div>
    )
}

export default Logo;