import React from 'react'
import img_wavyLinesMiddle from '../assets/images/wavy-lines-middle.svg'
import ServiceBox from './generics/ServiceBox';
import Button from './generics/Button';
import SectionTitle from './generics/SectionTitle';

const ServiceSection = () => {
  return (
    <section className="service-section">
    <img src={img_wavyLinesMiddle} alt="wavy lines" />
    <div className=" container">
        <div className="section-title">
            <SectionTitle title='Our Services' description='We Provide The Best Service For Consulting' />
        </div>
        <div className="service-boxes">
            <ServiceBox title='Buisiness Advice' to='/business/advice' />
            <ServiceBox title='Startup Business' to='/startup' />
            <ServiceBox title='Financial Advice' to='/financial/advice' />
            <ServiceBox title='Risk Management' to='/riskmanagement' />
        </div>
        <div className="service-button">
            <a className="btn-transparent" href="services.html">Browse Services <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
</section>
  )
}

export default ServiceSection