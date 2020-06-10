import React, { useState, useEffect } from 'react';
import './Main.css';

//Services 
import footballAPI from '../../services/footballAPI'

// My Components
import NewsCard from '../NewsCard/NewsCard';
import TodaysAction from '../TodaysAction/TodaysAction';

const Main = ({ breakingNews }) => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    footballAPI.getTodaysAction()
      .then(data => setFixtures(data.api.fixtures))
  }, [])

  return (
    <div className="Main">
      <section className="cards"> 
        {breakingNews ? 
          breakingNews.slice(0, 3).map(article => {
            return <NewsCard key={article.url} article={article}/>
          })
          : null 
        }
      </section>
      <TodaysAction fixtures={fixtures}/>
    </div>
  )
}


export default Main;
