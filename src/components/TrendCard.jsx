import React from 'react';

import './TrendCard.css';

const TrendCard = ({ slide }) => {
    return (
        <div className='trend-card'>
            <img src={slide.previewImg} alt="trend" className='img-fluid' />
            <a href="#">
                Add To Calendar <ion-icon name="calendar-outline"></ion-icon>
            </a>
        </div>
    );
};

export default TrendCard;
