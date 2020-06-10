import React from 'react';
import './NewsList.css';

// My Components
import NewsCard from '../NewsCard/NewsCard';

const NewsList = ({news}) => (
  <div className="NewsList">
      <h2>Top News</h2>
      <section className="cards"> 
        {news.length ? 
          news.slice(0, 3).map(article => {
            return <NewsCard key={article.url} article={article}/>
          })
          : null 
        }
      </section>
  </div>
);

export default NewsList;
