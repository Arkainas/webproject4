import React, { useState, useEffect } from "react";
import './Articles.css';

const ArticleCard = ({ title, summary, link, published, topic }) => {
    return (
        <div className="article-card">
            <h2>{title}</h2>
            <p>{summary}</p>
            <p><strong>Published:</strong> {published.toDateString()}</p>
            <p><strong>Topics:</strong> {topic.join(", ")}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
};

const NewsPage = () => {
    const [articles, setArticles] = useState([]);
    const [sortOrder, setSortOrder] = useState('newest'); // default sort order
    const [selectedCategory, setSelectedCategory] = useState('All'); // default category

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

    const sortArticles = (articles) => {
        let sortedArticles = [...articles];

        if (sortOrder === 'newest') {
            sortedArticles.sort((a, b) => b.published - a.published);
        } else if (sortOrder === 'oldest') {
            sortedArticles.sort((a, b) => a.published - b.published);
        }

        if (selectedCategory !== 'All') {
            sortedArticles = sortedArticles.filter(article => article.topic.includes(selectedCategory));
        }

        return sortedArticles;
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const categories = [...new Set(articles.flatMap(article => article.topic)), 'All'];

    return (
        <div className="news-page">
            <div className="sorting-controls">
                <div>
                    <label>
                        Sort by:
                        <select value={sortOrder} onChange={handleSortChange}>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>

            <div className="articles-container">
                {sortArticles(articles).map((article, index) => (
                    <ArticleCard
                        key={index}
                        title={article.title}
                        summary={article.summary}
                        link={article.link}
                        published={article.published}
                        topic={article.topic}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;

