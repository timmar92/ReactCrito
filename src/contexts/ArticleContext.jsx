import { createContext, useEffect, useState } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

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

    return (
        <ArticleContext.Provider value={articles}>
            {children}
        </ArticleContext.Provider>
    );
};