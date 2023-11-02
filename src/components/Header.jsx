import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img_logotype from '../assets/images/logo.svg'
import Button from './generics/Button';


const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <button className="btn-menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
                    <div className="logotype">
                        <Link to="/"><img src={img_logotype} alt="crito logotype" /></Link>
                    </div>
                    <div className="contact-information-bar">
                        <div className="contact-box">
                            <i className="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="contact-box">
                            <i className="fa-light fa-envelope-dot"></i>
                            info@crito.com
                        </div>
                        <div className="contact-box last">
                            <i className="fa-light fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className="menu">
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                        <Button to='/login' type='yellow' title='Login'/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;