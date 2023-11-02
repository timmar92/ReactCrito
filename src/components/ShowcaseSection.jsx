import React from 'react';
import Button from './generics/Button';
import img_wavyLinesTop from '../assets/images/wavy-lines-top.svg'
import img_shocaseImage from '../assets/images/showcase-image.svg'

const ShowcaseSection = () => {
    return (
        <section className="showcase">
            <div className="container">
                <img className="wavy-lines-top" src={img_wavyLinesTop} alt="wavy lines for design" />
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button to='/consulting' title='Get Consulting' type='yellow' />
                    <Button to='/services' title='Learn More' type='transparent' />
                </div>
                <img src={img_shocaseImage} alt="a man in a suit looking at a tablet" />
            </div>
        </section>
    );
};

export default ShowcaseSection;