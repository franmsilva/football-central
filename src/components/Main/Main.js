import React, { useState, useEffect } from 'react';
import './Main.css';

//Services 
import footballAPI from '../../services/footballAPI'

// Utils 
import moment from 'moment'

// My Components
import NewsCard from '../NewsCard/NewsCard';
import TodaysAction from '../TodaysAction/TodaysAction';

const Main = ({ breakingNews }) => {
  const [fixtures, setFixtures] = useState([])

  useEffect(() => {
    footballAPI.getTodaysFixtures(moment().format("YYYY-MM-DD"))
      .then(fixtures => setFixtures(fixtures))
  }, [])

  return (
    <div className="Main">
      <h2>Top News</h2>
      <section className="cards"> 
        {breakingNews.length ? 
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
