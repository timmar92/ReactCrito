import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticleContext } from '../../contexts/ArticleContext';

const Article = ({ limit }) => {
    const articles = useContext(ArticleContext);

    return (
        <>
            {articles && (limit ? articles.slice(0, limit) : articles).map((article) => {
                const date = new Date(article.published);
                const publishedDay = date.toLocaleDateString('sv-SE', { day: '2-digit' });
                const publishedMonth = date.toLocaleDateString('sv-SE', { month: 'long' }).slice(0, 3);

                return (
                    <Link key={article.id} className="article" to={`/newsdetails/${article.id}`}>
                        <div className="picture">
                            <img className="article-image" src={article.imageUrl} alt="article" />
                            <p className='date'>
                                <span className='day'>{publishedDay}</span>
                                <span className='month'>{publishedMonth}</span>
                            </p>
                            <p>{article.category}</p>
                        </div>
                        <div className="info">
                            <h3>{article.title}</h3>
                            <p className='content'>{article.content}</p>
                            <p>Av: {article.author}</p>
                        </div>
                    </Link>
                );
            })}
        </>
    );
};

export default Article;