import React from 'react';
import img_advice from '../../assets/images/advice.svg';
import img_startup from '../../assets/images/startup.svg';
import img_financial from '../../assets/images/financial.svg';
import img_management from '../../assets/images/management.svg';
import img_smallStar from '../../assets/images/small-star.svg';

const FeatureBox = ({ title, description }) => {
    if (title === 'advice') {
        return (
            <>
                <div className="image">
                    <img className="main-image" src={img_advice} alt="shaking hands" />
                    <img className="star-1" src={img_smallStar} alt="small star" />
                    <img className="star-2" src={img_smallStar} alt="small star" />
                    <img className="star-3" src={img_smallStar} alt="small star" />
                </div>
                <h3>{description}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </>
        );
    }
    if (title === 'startup') {
        return (
            <>
                <div className="image">
                    <img className="main-image" src={img_startup} alt="shaking hands" />
                    <img className="star-1" src={img_smallStar} alt="small star" />
                    <img className="star-2" src={img_smallStar} alt="small star" />
                    <img className="star-3" src={img_smallStar} alt="small star" />
                </div>
                <h3>{description}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </>
        );
    }
    if (title === 'financial') {
        return (
            <>
                <div className="image">
                    <img className="main-image" src={img_financial} alt="shaking hands" />
                    <img className="star-1" src={img_smallStar} alt="small star" />
                    <img className="star-2" src={img_smallStar} alt="small star" />
                    <img className="star-3" src={img_smallStar} alt="small star" />
                </div>
                <h3>{description}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </>
        );
    }
    if (title === 'management') {
        return (
            <>
                <div className="image">
                    <img className="main-image" src={img_management} alt="shaking hands" />
                    <img className="star-1" src={img_smallStar} alt="small star" />
                    <img className="star-2" src={img_smallStar} alt="small star" />
                    <img className="star-3" src={img_smallStar} alt="small star" />
                </div>
                <h3>{description}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </>
        );
    }

};

export default FeatureBox;