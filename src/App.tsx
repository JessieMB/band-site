import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {NAVLINKS} from './links/NAVLINKS';
import Body from "./components/Body/Body";
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Gallery from "./components/pages/Gallery/Gallery";
import MailingList from "./components/pages/MailingList/MailingList";
import Music from "./components/pages/Music/Music";
import Shop from "./components/pages/Shop/Shop";
import Shows from "./components/pages/Shows/Shows";
import Container from "@material-ui/core/Container";
function App() {
    return (
        <Container className="App" maxWidth="xl">
            <header>
                <Logo/>
            </header>

            <Router>
                <NavBar buttons={NAVLINKS}/>
                <Switch>
                    <Route exact path="/">
                        <Body/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/mailing-list">
                        <MailingList/>
                    </Route>
                    <Route path="/music">
                        <Music/>
                    </Route>
                    <Route path="/shop">
                        <Shop/>
                    </Route>
                    <Route path="/shows">
                        <Shows/>
                    </Route>
                </Switch>

            </Router>

            <Footer/>
        </Container>
    );
}

export default App;
