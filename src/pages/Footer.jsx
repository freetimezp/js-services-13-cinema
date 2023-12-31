import React from 'react';

import FooterNavItem from '../components/FooterNavItem';

import './Footer.css';

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy'
    ];

    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentum odio',
        'Justo eget',
        'Fermentum iaculis'
    ];

    return (
        <footer id="footer" className='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className='logo d-flex align-items-center'>
                                <span>CINEMA</span>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
                                adipisci quidem. Dolores commodi, excepturi consectetur deleniti tempore
                                exercitationem non voluptates ipsa doloribus esse ullam perspiciatis
                                voluptas? Magni, accusantium exercitationem.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className='twitter'>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="#" className='facebook'>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href="#" className='youtube'>
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                                <a href="#" className='instagram'>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                {usefulLinks?.map((link, i) => (
                                    <FooterNavItem key={i} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Cinemas</h4>
                            <ul>
                                {locations?.map((link, i) => (
                                    <FooterNavItem key={i} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                Street Name <br />
                                City Name, State 123456
                                <br />
                                Ukraine <br />
                                <br />
                                <strong>Phone:</strong> +1 234 567 8900
                                <br />
                                <strong>Email:</strong> info@gmail.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="copyright">
                        &copy; Copyright{' '}
                        <strong>
                            <span>FreeTime 2023</span>
                        </strong>
                        . All Rights Reserved.
                    </div>
                    <div className="credits">
                        Designed by <a href="#">SomeOne</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
