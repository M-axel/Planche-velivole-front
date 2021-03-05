import React from 'react';


import './Header.css';

const Header = props => {
    return <header className="header">
        {/* .children est directement reconnu => elements contenus par le component là où il est utilisé */}
        {props.children}
    </header>
};

export default Header;