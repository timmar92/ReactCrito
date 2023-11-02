import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Article = ({ limit }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
            
            if (response.status !== 200) {
                setError(`Error: ${response.status}`);
                return;
            }

            const data = await response.json();
            setArticles(data);
        };

        fetchArticles();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {(limit ? articles.slice(0, limit) : articles).map((article) => {
                const date = new Date(article.published);
                const publishedDate = date.toLocaleDateString('sv-SE');

                return (
                    <Link key={article.id} className="article" href="#">
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