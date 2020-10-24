import React from 'react';
import NavButton from "./NavButton";
import './NavBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Body from "../Body/Body";
// import {About, Music, Shop, Shows, MailingList, Contact, Gallery} from '../pages/index';

const NavBar = (props: any) => {
    return (
        <div className="container">
            <ul>
                {props.buttons.map((button: { title: string; link: string; }) => {
                    return (
                        <React.Fragment>
                            <Router>
                                <Switch>
                                    <span className='nav-item'>
                                        <NavButton title={button.title} link={button.link}/>
                                    </span>
                                    <span style={{padding: '0px 25px'}}/>
                                </Switch>
                            </Router>
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    )
}

export default NavBar;