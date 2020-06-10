import React from 'react';
import './App.css';

// Components 
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <Main />
      <Footer />
    </div>
  );
}

export default App;
