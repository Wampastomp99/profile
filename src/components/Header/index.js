import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const {
        navSelected,
        setNavSelected,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href='/'>
                    Michael O'Reilly
                </a>
            </h2>
            <Nav 
                navSelected={navSelected}
                setNavSelected={setNavSelected}
            />
        </header>
    );
}

export default Header;