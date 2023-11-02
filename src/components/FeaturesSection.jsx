import React from 'react';
import SectionTitle from './generics/SectionTitle';
import Button from './generics/Button';
import FeatureBox from './generics/FeatureBox';

const FeaturesSection = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title='Features' description='Our Accounting is trusted by thousands of companies' />
                    <Button to='/services' title='Learn more' type='yellow'  />
                </div>
                <div className="feature-grid">
                    <div className="advice">
                        <FeatureBox title='advice' description='Business advice' />
                    </div>
                    <div className="startup">
                        <FeatureBox title='startup' description='Startup Business' />
                    </div>
                    <div className="financial">
                        <FeatureBox title='financial' description='Finacial Advice' />
                    </div>
                    <div className="management">
                        <FeatureBox title='management' description='Risk Management' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;