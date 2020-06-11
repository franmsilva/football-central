import React, { useState, useEffect } from 'react';
import './Main.css';

//Services 
import footballAPI from '../../services/footballAPI';
import newsAPI from '../../services/newsAPI';

// Utils 
import moment from 'moment';

// My Components
import Hero from '../Hero/Hero';
import FixtureList from '../FixtureList/FixtureList';
import NewsList from '../NewsList/NewsList';

const Main = ({ breakingNews }) => {
  const [news, setNews] = useState([]);
  const [fixtures, setFixtures] = useState([])
  
  useEffect(() => {
    newsAPI.getBreakingNews()
      .then(data => setNews(data.articles))
    footballAPI.getTodaysFixtures(moment().format("YYYY-MM-DD"))
      .then(fixtures => setFixtures(fixtures))
  }, [])

  return (
    <div className="Main">
      <Hero /> 
      <a href id="main-body">
        <NewsList news={news} />
        <FixtureList fixtures={fixtures}/>
      </a>
    </div>
  )
}


export default Main;
