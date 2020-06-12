import React, { useState, useEffect } from 'react';
import './Main.css';

//Services 
import footballAPI from '../../services/footballAPI';
import newsAPI from '../../services/newsAPI';

// My Components
import MainSpinner from '../MainSpinner/MainSpinner';
import Hero from '../Hero/Hero';
import NewsList from '../NewsList/NewsList';
import FixtureList from '../FixtureList/FixtureList';
import Footer from '../Footer/Footer';


const Main = ({ breakingNews }) => {
  const [ready, setReady] = useState(false)
  const [news, setNews] = useState([]);
  const [fixtures, setFixtures] = useState([])
  
  useEffect(() => {
    newsAPI.getBreakingNews()
      .then(articles => setNews(articles))
    footballAPI.getTodaysFixtures()
      .then(fixtures => setFixtures(fixtures))
      .then(() => setReady(true))
  }, [])

  return (
    <div>
      {ready 
        ? <React.Fragment> 
            <Hero />
            <div className='main-section'> 
              <h2>Latest News</h2>
              <NewsList news={news.slice(0, 3)} />
              <br />
              <h2>Upcoming Action</h2>
              <FixtureList fixtures={fixtures}/>
            </div>
            <Footer />
          </React.Fragment> 
        : <MainSpinner />
      }
    </div>

  )
}

export default Main;
