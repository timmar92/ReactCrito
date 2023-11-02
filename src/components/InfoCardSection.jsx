import React from 'react';
import InformationCard from './generics/InformationCard';

const InfoCardSection = () => {
    return (
        <section className="info-card-section">
            <div className="container">
                <div className="contact-row">
                    <InformationCard
                        altText="map pin"
                        title="Visit us"
                        info={["Sveavägen 31", "111 34 STOCKHOLM"]}
                    />
                    <InformationCard 
                        altText="phone pin" 
                        title="Call us" 
                        info={["+46 (8) 121 470 50", "+46 (8) 121 470 51"]} 
                    />
                    <InformationCard 
                        altText="email pin" 
                        title="Email us" 
                        info={["info@crito.com", "support@crito.com"]} 
                    />
                </div>
            </div>
        </section>
    );
};

export default InfoCardSection;