import React from 'react';
import './NewsList.css';

// My Components
import NewsCardV2 from '../NewsCardV2/NewsCardV2';
import NewsCardLarge from '../NewsCardLarge/NewsCardLarge';

const NewsList = ({news}) => (
  <div className="NewsList">
    {news.length ? <NewsCardLarge article={news[0]} /> : null} 
    <div className='small__cards__container'>
      {news.slice(1).map(article => {
        return <NewsCardV2 article={article} />
      })}
    </div>
    {!news.length ? <div className='backup'>You're all caught up <span role='img' aria-label=''>🤓</span></div> : null}
  </div>
);

export default NewsList;
