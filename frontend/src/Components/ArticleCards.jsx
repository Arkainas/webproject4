import React, { useState, useEffect } from "react";
import './Articles.css'

const ArticleCard = ({title, summary, link, published, topic }) => {
    return (
        <div className="article-card">
            <h2>{title}</h2>
            <p>{summary}</p>
            <p><strong>Published:</strong> {published.toDateString()}</p>
            <p><strong>Topics:</strong> {topic.join(", ")}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    )
}

const NewsPage = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/articles')
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.map(article => ({
                    ...article,
                    published: new Date(article.published)
                }));
                setArticles(formattedData);
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
            });
    }, []);

    return (
        <div className="news-page">
            {articles.map((article, index) => (
                <ArticleCard
                key={index}
                title={article.title}
                summary={article.summary}
                link={article.link}
                published={article.published}
                topic={article.topic}
                />
            )
        )}
        </div>
    )
}

export default NewsPage;