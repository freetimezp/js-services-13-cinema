import React from 'react';

import Button from './Button';

import movieTitle from '../images/transformer-title.png';

import './MovieContent.css';

function MovieContent() {
    return (
        <div className="content active">
            <img src={movieTitle} alt="movie title" className="movie-title" />
            <h4>
                <span>Year</span>
                <span><i>age</i></span>
                <span>length</span>
                <span>category</span>
            </h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam consequuntur sit dolorum laudantium doloremque quod
                amet aliquid recusandae dolores unde totam, perspiciatis ipsa
                aspernatur laboriosam obcaecati eius modi tempore quo consectetur
                velit quia impedit vero nesciunt. Repudiandae ullam eaque nemo
                quas qui, molestiae iure officiis cum esse animi? Deleniti, amet.
            </p>
            <div className="button">
                <Button
                    icon={<ion-icon name="bookmark-outline"></ion-icon>}
                    name='Book'
                    color='#ff3700'
                    bgColor="#fff"
                />
                <Button
                    icon={<ion-icon name="add-outline"></ion-icon>}
                    name='My List'
                />
            </div>
        </div>
    );
};

export default MovieContent;
