import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Aujourd'hui</NavLink>
            </li>
            <li>
                <NavLink to="/archive">Archives</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;