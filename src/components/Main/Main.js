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
  const [todaysFixtures, setTodaysFixtures] = useState([])
  const [yesterdaysFixtures, setYesterdaysFixtures] = useState([])
  
  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
    newsAPI.getBreakingNews()
      .then(articles => setNews(articles))
    footballAPI.getTodaysFixtures()
      .then(fixtures => setTodaysFixtures(fixtures))
    footballAPI.getYesterdaysFixtures()
      .then(fixtures => setYesterdaysFixtures(fixtures))
      .then(() => setReady(true))
  }, [])

  return (
    <div>
      {ready 
        ? <React.Fragment> 
            <Hero />
            <div className='main-section'> 
              <h2>Latest News</h2>
              <NewsList news={news.slice(0, 4)} />
              <br />
              {todaysFixtures.length
                ? <React.Fragment>
                    <h2>Today's Action</h2> 
                    <FixtureList fixtures={todaysFixtures}/>
                  </React.Fragment>
                : <div>No matches on today <span role='img' aria-label=''>😥</span></div>
              }
              {yesterdaysFixtures.length
                ? <React.Fragment>
                    <h2>Yesterday's Results</h2>
                    <FixtureList fixtures={yesterdaysFixtures}/>
                  </React.Fragment>
                : <div>No matches on today <span role='img' aria-label=''>😥</span></div>
              }
            </div>
            <Footer />
          </React.Fragment> 
        : <MainSpinner />
      }
    </div>

  )
}

export default Main;
