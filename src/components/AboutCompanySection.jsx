import React from 'react';
import img_squigglyLine from '../assets/images/squiggly-line.svg'
import img_founder from '../assets/images/founder.png'
import img_videoButton from '../assets/images/Video.svg'
import { Link } from 'react-router-dom';
import Button from './generics/Button';
import SectionTitle from './generics/SectionTitle';

const AboutCompanySection = () => {
    return (
        <section className="about-company">
            <div className="container">
                <div className="founder">
                    <img className="squiggly-line" src={img_squigglyLine} alt="" />
                    <img className="founder-image" src={img_founder} alt="image of founder" />
                    <div className="blue-card">
                        <h3>Samantha Brown,<p>Founder</p></h3>
                        <div className="quote">
                            <div>"Lorem ipsum dolor sit amet consectetur</div>
                            <div>adipisicing elit."</div>
                        </div>
                    </div>
                </div>
                <div className="section-title">
                    <SectionTitle title='About Company' description='We Are Business Consulting & Credit Repair Experts' />
                    <div className="text-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</div>
                    <div className="text-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</div>
                    <div className="button-and-video">
                        <Button to='/services' title='Learn More' />
                        <Link className="video-btn" to="/videos/intro"><img src={img_videoButton} alt="video button" /> Intro Video</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompanySection;