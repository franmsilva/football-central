import React, { useState, useEffect } from 'react';
import './Main.css';

//Services 
import footballAPI from '../../services/footballAPI';
import newsAPI from '../../services/newsAPI';

// My Components
import Hero from '../Hero/Hero';
import FixtureList from '../FixtureList/FixtureList';
import NewsList from '../NewsList/NewsList';

const Main = ({ breakingNews }) => {
  const [news, setNews] = useState([]);
  const [fixtures, setFixtures] = useState([])
  
  useEffect(() => {
    newsAPI.getBreakingNews()
      .then(articles => setNews(articles))
    footballAPI.getTodaysFixtures()
      .then(fixtures => setFixtures(fixtures))
  }, [])

  return (
    <div className="Main">
      <Hero /> 
      <a href id="main-body">
        <NewsList news={news.slice(0, 3)} />
        <FixtureList fixtures={fixtures}/>
      </a>
    </div>
  )
}


export default Main;
