import React from 'react';
import './NewsList.css';

// My Components
import NewsCardV2 from '../NewsCardV2/NewsCardV2';
import NewsCardLarge from '../NewsCardLarge/NewsCardLarge';

const NewsList = ({news}) => (
  <div className="NewsList">
    <NewsCardLarge article={news.shift()} />
    <div className='small__cards__container'>
      {news.length ? 
        news.map(article => {
          return <NewsCardV2 key={article.url} article={article}/>
        })
        : <div className='backup'>You're all caught up <span role='img' aria-label=''>🤓</span></div>
      }
    </div>
  </div>
);

export default NewsList;
