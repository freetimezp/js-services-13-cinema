import React from 'react';

import './NavListItem.css';

function NavListItem({ nav, navOnClick }) {
    return (
        <li>
            <a
                href={nav.link}
                onClick={() => navOnClick(nav._id)}
                className={`${nav.active ? 'active' : undefined}`}
            >{nav.name}</a>
        </li>
    )
}

export default NavListItem
