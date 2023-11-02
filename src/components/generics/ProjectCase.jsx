import React from 'react';
import { Link } from 'react-router-dom';
import img_growBusiness from '../../assets/images/grow-business.png';
import img_responsiveWebsite from '../../assets/images/responsive-website.png';
import img_educateEmployees from '../../assets/images/educate-employees.png';
import img_businessInsights from '../../assets/images/business-insights.png';

const cases = {
    case1: {
        img: img_growBusiness,
        alt: "man reading a business newspaper",
        title: "Grow your business"
    },
    case2: {
        img: img_responsiveWebsite,
        alt: "rose gold ipad and apple watch",
        title: "Why your client needs a responsive website"
    },
    case3: {
        img: img_educateEmployees,
        alt: "desk with notetaking supplies",
        title: "Educate your employees to get better results"
    },
    case4: {
        img: img_businessInsights,
        alt: "macbook with business intelligence insights",
        title: "Business Insights is a important piece of your business"
    }
};

const ProjectCase = ({ title, to }) => {
    const caseInfo = cases[title];
    
    return (
        <Link to={to} title={title} className="projects">
            <img src={caseInfo.img} alt={caseInfo.alt} />
            <h3>{caseInfo.title}</h3>
            <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
        </Link>
    );
};

export default ProjectCase;