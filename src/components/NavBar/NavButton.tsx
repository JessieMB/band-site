import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const NavButton = (props: any) => {
    return (
        <Link to={props.link}>
            {props.title}
        </Link>

    );
}

export default NavButton;