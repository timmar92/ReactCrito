import React from 'react';
import img_mapPin from '../../assets/images/map-pin.svg';
import img_phonePin from '../../assets/images/phone-pin.svg';
import img_email from '../../assets/images/email.svg';

const images = {
    "map pin": img_mapPin,
    "phone pin": img_phonePin,
    "email pin": img_email,
};

const InformationCard = ({ altText, title, info }) => {
    const imgSrc = images[altText];

    return (
        <div className="card">
            <div className="image">
                <img src={imgSrc} alt={altText} />
            </div>
            <div className="card-text">
                <h3>{title}</h3>
                {info.map((line, index) => <p key={index}>{line}</p>)}
            </div>
        </div>
    );
};

export default InformationCard;