import React, { useContext } from 'react'
import Article from './generics/Article';
import SectionTitle from './generics/SectionTitle';
import { ArticleContext } from '../contexts/ArticleContext';

const AllArticlesSection = () => {


  return (
    <section className='all-articles-section'>
        <div className='container section-title'>
        <SectionTitle title='' description='Our News & Articles' />
        </div>
        <div className='container'>
            <Article />
        </div>
    </section>
  )
}

export default AllArticlesSection