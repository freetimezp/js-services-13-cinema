import React from 'react';

import Schedule from './Schedule';
import Trend from './Trend';
import Blog from './Blog';

import './Main.css';

function Main() {
    return (
        <main>
            <Schedule />
            <Trend />
            <Blog />
        </main>
    );
};

export default Main;
