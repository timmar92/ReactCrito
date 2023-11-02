import React from 'react';
import img_thumbsUp from '../../assets/images/thumbs-up.svg'
import img_hexagon from '../../assets/images/hexagon.svg'
import img_pen from '../../assets/images/pen-svg.svg'
import img_brain from '../../assets/images/brain.svg'

const cards = {
    card1: {
        img: img_thumbsUp,
        alt: "thumbs up",
        title: "Process Excellence",
        description: "Lorem, ipsum dolor sit amet consectetur."
    },
    card2: {
        img: img_hexagon,
        alt: "hexagon",
        title: "Strategic Planning",
        description: "Lorem, ipsum dolor sit amet consectetur."
    },
    card3: {
        img: img_pen,
        alt: "pen",
        title: "Experience Design",
        description: "Lorem, ipsum dolor sit amet consectetur."
    },
    card4: {
        img: img_brain,
        alt: "brain",
        title: "Artificial Intelligence",
        description: "Lorem, ipsum dolor sit amet consectetur."
    }
};

const InfoCard = ({ title }) => {
    const cardInfo = cards[title];
    
    return (
        <div className="info-card">
            <img src={cardInfo.img} alt={cardInfo.alt} />
            <div>
                <h3>{cardInfo.title}</h3>
                <p>{cardInfo.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
