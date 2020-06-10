import React, { useState, useEffect } from 'react';
import './App.css';

// Services 
import newsAPI from '../../services/newsAPI'

// Components 
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero';
import Main from '../Main/Main';

function App() {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    newsAPI.getBreakingNews()
      .then(data => setBreakingNews(data.articles))
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <Main breakingNews={breakingNews}/>
    </div>
  );
}

export default App;
