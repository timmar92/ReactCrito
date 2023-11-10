import React, { useRef } from 'react';
import SectionTitle from './generics/SectionTitle';
import Button from './generics/Button';
import Article from './generics/Article';

const ArticlesSection = () => {
    const scrollContainer = useRef(null);

    const scroll = (scrollOffset) => {
        scrollContainer.current.scrollBy({ top: 0, left: scrollOffset, behavior: 'smooth' });
    };

    return (
        <section className="articles-section">
            <div className="container">
                <div className="header">
                    <div className="section-title">
                        <SectionTitle title='Articles & News' description= 'Get Every Single Article & News' />
                    </div>
                    <Button to='/news' type='transparent' title='Browse Articles' />
                </div>

                <div className="article-row" ref={scrollContainer}>  
                    <Article /> 
                </div>
                <div className='scrollers'>
                    <button className='left' onClick={() => scroll(-852)}><i className="fa-solid fa-arrow-left"></i></button>
                    <button className='right' onClick={() => scroll(852)}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;