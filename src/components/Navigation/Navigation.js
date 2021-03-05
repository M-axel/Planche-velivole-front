import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import NavLinks from './NavLinks';
import './Navigation.css';

const Navigation = props => {
    return (
        // Tous les elements 
        <Header>
            <h1>
                <Link to="/">A.A.P.C.A.</Link>
                </h1>
            <nav>
                <NavLinks />
            </nav>
            <button>Authentification</button>
        </Header>
    );

};

export default Navigation;