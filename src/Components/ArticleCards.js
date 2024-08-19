import React from "react";
import articles from "./ArticleList.js"
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