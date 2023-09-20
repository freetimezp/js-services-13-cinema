import React from 'react';

import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import Button from '../components/Button';

import navListData from '../data/navListData';

import './Header.css';

function Header() {
    return (
        <header>
            <a href="/" className="logo">Cinema</a>
            <ul className="nav">
                {navListData && navListData.map(nav => (
                    <NavListItem nav={nav} key={nav._id} />
                ))}
            </ul>
            <Search />
            <Button
                icon={<ion-icon name="log-in-outline"></ion-icon>}
                name="sign in"
            />
        </header>
    )
}

export default Header
