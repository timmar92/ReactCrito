import React from 'react';
import SectionTitle from './generics/SectionTitle';
import Button from './generics/Button';
import Article from './generics/Article';

const ArticlesSection = () => {


    return (
        <section className="articles-section">
            <div className="container">
                <div className="header">
                    <div className="section-title">
                        <SectionTitle title='Articles & News' description= 'Get Every Single Article & News' />
                    </div>
                    <Button to='/news' type='transparent' title='Browse Articles' />
                </div>
                <div className="article-row">  
                    <Article limit={3} /> 
                </div>

            </div>
        </section>
    );
};

export default ArticlesSection;