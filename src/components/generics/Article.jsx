import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticleContext } from '../../contexts/ArticleContext';

const Article = ({ limit }) => {
    const articles = useContext(ArticleContext);

    return (
        <>
            {articles && (limit ? articles.slice(0, limit) : articles).map((article) => {
                const date = new Date(article.published);
                const publishedDate = date.toLocaleDateString('sv-SE');

                return (
                    <Link key={article.id} className="article" to={`/newsdetails/${article.id}`}>
                        <div className="picture">
                            <img className="article-image" src={article.imageUrl} alt="article" />
                            <p className='date'>Published: {publishedDate}</p>
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