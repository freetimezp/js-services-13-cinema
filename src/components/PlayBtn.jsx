import React from 'react';

import './PlayBtn.css';

function PlayBtn({ movie }) {
    return (
        <div
            className={`trailer d-flex justify-content-center align-items-center 
            ${movie.active ? 'active' : undefined}`}
        >
            <a href="#" className="playBtn">
                <ion-icon name="play-outline"></ion-icon>
            </a>
            <p>Watch Trailer</p>
        </div>
    );
};

export default PlayBtn;
