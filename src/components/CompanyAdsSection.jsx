import React from 'react';
import img_ad1 from '../assets/images/ad1.svg';
import img_ad2 from '../assets/images/ad2.svg';
import img_ad3 from '../assets/images/ad3.svg';
import img_ad4 from '../assets/images/ad4.svg';
import img_ad5 from '../assets/images/ad5.svg';


const CompanyAdsSection = () => {
    return (
        <section className="company-ads">
        <div className="container">
            <img src={img_ad1} alt="Paperz company logo"/>
            <img src={img_ad2} alt="Dorfus company logo"/>
            <img src={img_ad3} alt="Martino company logo"/>
            <img src={img_ad4} alt="Square company logo"/>
            <img src={img_ad5} alt="Gobona company logo"/>
        </div>
    </section>
    );
};

export default CompanyAdsSection;