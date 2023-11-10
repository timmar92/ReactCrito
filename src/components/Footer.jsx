import React from 'react';
import img_whiteLogo from '../assets/images/logo-white.svg'
import img_wavyLinesFooter from '../assets/images/wavy-lines-footer.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className="link-section">
                <div className="container">
                    <div className="logotype">
                        <Link to="/">
                            <img src={img_whiteLogo} alt="crito logotype" />
                        </Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="link-columns">
                        <h3 className="column title">Company</h3>
                        <Link to="/any">About</Link>
                        <Link to="/any">Features</Link>
                        <Link to="/any">Works</Link>
                        <Link to="/any">Career</Link>
                    </div>
                    <div className="link-columns">
                        <h3 className="column title">Help</h3>
                        <Link to="/any">Customer Support</Link>
                        <Link to="/any">Delivery Details</Link>
                        <Link to="/any">Terms & Conditions</Link>
                        <Link to="/any">Privacy Policy</Link>
                    </div>
                    <div className="link-columns">
                        <h3 className="column title">Resources</h3>
                        <Link to="/any">Free eBooks</Link>
                        <Link to="/any">Development Tutorial</Link>
                        <Link to="/any">How to - Blog</Link>
                        <Link to="/any">Youtube Playlist</Link>
                    </div>
                    <div className="link-columns">
                        <h3 className="column title">Links</h3>
                        <Link to="/any">Free eBooks</Link>
                        <Link to="/any">Development Tutorial</Link>
                        <Link to="/any">How to - Blog</Link>
                        <Link to="/any">Youtube Playlist</Link>
                    </div>
                </div>
                <img className="wavy-lines-footer" src={img_wavyLinesFooter} alt=""/>
            </section>

            <section className="footer-section">
                <div className="page-bottom">
                    <div className="container">
                        <div className="copyright">
                            &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.
                        </div>
                        <div className="social-media">
                            <Link to="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;