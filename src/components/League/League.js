import React from 'react';
import './League.css';
import { useParams } from 'react-router-dom';

// My Components

const League = () => {
  const { leagueID } = useParams();
  return (
    <div className="League">
      <h1>League Component</h1>
      <h2>{leagueID}</h2>
    </div>
  );
}  

export default League;
