import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import ArticlesSection from '../components/ArticlesSection';
import Tag from '../components/generics/Tag';
import SearchBox from '../components/SearchBox';
import { ArticleContext } from '../contexts/ArticleContext';



const NewsDetails = () => {
    const { id } = useParams();
    const articles = useContext(ArticleContext);
    const article = articles.find(article => article.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

  return (
    
    <>
        <Header />
        <main>
            <PageTitle place='Home' strong='News' title='Articles & News' />
            {article && (
                <section className='expanded-article'>
                    <div className='container'>
                        <div className='article'>
                            <h2 className='title'>{article.title}</h2>
                            <div className='info'>
                                <p className='published'>{new Date(article.published).toLocaleDateString()}</p>
                                <div className='yellow-dot'><i className="fa-sharp fa-solid fa-circle"></i></div>
                                <p className='author'>{article.author}</p>
                                <div className='yellow-dot'><i className="fa-sharp fa-solid fa-circle"></i></div>
                                <p className='category'>{article.category}</p>
                            </div>
                            <img className='article-img' src={article.imageUrl} />
                            <div className='content'>
                                <p className='first'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                                <p className='second'>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                                <p className='third'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                                <p className='fourth'>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                            </div>
                            <div className='quote'>
                                <div className='icon'><i className="fa-sharp fa-solid fa-quote-right fa-flip-horizontal"></i></div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                            </div>
                            <p className='last'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                            <div className='tag-row'>
                                <Tag text='Digitalization' />
                                <Tag text='School' />
                                <Tag text='IT' />
                                <Tag text='Design' />
                                <Tag text='Work' />
                                <Tag text='Tech' />
                            </div>

                        </div>
                        <div className='recent-posts'>
                            <SearchBox />
                        </div>
                    </div>
                </section>
            )}
            <section className='different-background-color'>
                <ArticlesSection />
            </section>

        </main>
        <Footer />
    </>
  )
}

export default NewsDetails