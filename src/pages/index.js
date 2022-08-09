import { useState, useEffect } from 'react';
import FixtureList from '../components/FixtureList/FixtureList';
import Hero from '../components/Hero/Hero';
import Spinner from '../components/Spinner/Spinner';
import NewsList from '../components/NewsList/NewsList';
import newsAPI from '../services/newsAPI';
import footballAPI from '../services/footballAPI';

const Home = () => {
  const [ready, setReady] = useState(false);
  const [news, setNews] = useState([]);
  const [todaysFixtures, setTodaysFixtures] = useState([]);
  const [yesterdaysFixtures, setYesterdaysFixtures] = useState([]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    newsAPI.getBreakingNews().then((articles) => setNews(articles));
    footballAPI.getTodaysFixtures().then((fixtures) => setTodaysFixtures(fixtures));
    footballAPI
      .getYesterdaysFixtures()
      .then((fixtures) => setYesterdaysFixtures(fixtures))
      .then(() => setReady(true));
  }, []);

  return (
    <div>
      {ready ? (
        <>
          <Hero />
          <div className="main-section">
            <h2>Latest News</h2>
            <NewsList news={news.slice(0, 4)} />
            <br />
            {todaysFixtures.length ? (
              <>
                <h2>Today&apos;s Action</h2>
                <FixtureList fixtures={todaysFixtures} />
              </>
            ) : (
              <div>
                No matches on today{' '}
                <span role="img" aria-label="">
                  😥
                </span>
              </div>
            )}
            {yesterdaysFixtures.length ? (
              <>
                <h2>Yesterday&apos;s Results</h2>
                <FixtureList fixtures={yesterdaysFixtures} />
              </>
            ) : (
              <div>
                No matches on today{' '}
                <span role="img" aria-label="">
                  😥
                </span>
              </div>
            )}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
