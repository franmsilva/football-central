import React from 'react';
import './App.css';

// Components 
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      {/*Main Body*/}
    </div>
  );
}

export default App;
