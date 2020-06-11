import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => (
  <article className="card">
    <div className="card__img" style={{backgroundImage: `url(${article.urlToImage})`}}></div>
    <a href={article.url} rel="noopener noreferrer" target="_blank" className="card_link">
      <div className="card__img--hover"></div>
    </a>
    <div className="card__info">
      <span className="card__category">{article.source.name.split(' - ')[0]}</span>
      <h3 className="card__title">{article.title.split(' - ')[0]}</h3>
      <span className="card__by">by <span className="card__author" title="author">{article.author}</span></span>
    </div>
  </article>
);

export default NewsCard;
