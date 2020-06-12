import React from 'react';
import './NewsList.css';

// My Components
import NewsCardV2 from '../NewsCardV2/NewsCardV2';

const NewsList = ({news}) => (
  <div className="NewsList">
    {news.length ? 
      news.map(article => {
        return <NewsCardV2 key={article.url} article={article}/>
      })
      : null 
    }
  </div>
);

export default NewsList;
