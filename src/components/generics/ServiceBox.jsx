import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = ({title, to}) => {
    return (
        <Link to={to} className="service-box">
            <div className='line'></div>
            <h3>{title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <div className='arrow-ring'><i className="fa-light fa-arrow-right"></i></div>
        </Link>
    );
};

export default ServiceBox;