import React, { useState, useEffect } from 'react';

import bgImg from '../images/transformer.jpg';
import movieTitle from '../images/transformer-title.png';


import './Banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='banner'>
            <div className="movie">
                <img src={bgImg} alt="banner bg" className="bgImg active" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
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
                                    Button
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="date active">
                                <h2>On 15th September</h2>
                            </div>
                            <div className="trailer active d-flex justify-content-center align-items-center">
                                <a href="#" className="playBtn">
                                    <ion-icon name="play-outline"></ion-icon>
                                </a>
                                <p>Watch Trailer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
