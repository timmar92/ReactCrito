import React from 'react';
import SectionTitle from './generics/SectionTitle';
import img_twoPeole from '../assets/images/two-people.png'
import InfoCard from './generics/InfoCard';

export const ChooseUsSection = () => {
    return (
        <section className="choose-us-section">
            <div className="grey-card"></div>
            <div className="container">
                <div className="information-column">
                    <div className="section-title">
                        <SectionTitle title='Why Choose Us' description='Why We Are The Best Business Consulting Agency' />
                    </div>
                    <div className="information-highlight">
                        <InfoCard title='card1' />
                        <InfoCard title='card2' />
                        <InfoCard title='card3' />
                        <InfoCard title='card4' />
                    </div>
                </div>
                <img className="two-people" src={img_twoPeole} alt="two women talking business" />
            </div>
        </section>
    );
};

export default ChooseUsSection;