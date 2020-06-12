import React from 'react';
import './NewsCardV2.css';

import moment from 'moment'

const NewsCardV2 = ({article}) => (
  <div className="card">
    <img className="card__img" src={article.urlToImage} alt=''/>
    <a href={article.url} rel="noopener noreferrer" target="_blank" >
      <div className="card__info">
        <span className="card__source">{article.source.name.split(' - ')[0]}</span>
        <h3 className="card__title">{article.title.split(' - ')[0]}</h3>
        <span className="card__published">published: <span className='card__date'>{moment(article.publishedAt).format('DD.MM.YYYY')}</span></span>
      </div>
    </a>
  </div>
);

export default NewsCardV2;
