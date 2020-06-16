import React, { useState, useEffect } from 'react';
import './Fixture.css';

// Utils
// import moment from 'moment';

// Routing
import { useParams } from 'react-router-dom';

//Services
import footballAPI from '../../services/footballAPI';

// My Components
import FixtureHeader from '../FixtureHeader/FixtureHeader';
import FixtureBody from '../FixtureBody/FixtureBody';
import MainSpinner from '../MainSpinner/MainSpinner';


const Fixture = () => {
  const { fixtureID } = useParams();

  const [fixtureStatus, setFixtureStatus] = useState('');
  const [predictions, setPredictions] = useState({});
  const [fixtureData, setFixtureData] = useState({});
  
  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
    footballAPI.getPredictions(fixtureID) 
      .then(predictions => setPredictions(predictions))
    footballAPI.getFixtureData(fixtureID)
      .then(fixture => {
        setFixtureData(fixture)
        setFixtureStatus(fixture.status) 
      })
  }, [fixtureID]);

  useEffect(() =>{ 
    if (fixtureStatus !== 'Not Started' || fixtureStatus !== 'Match Finished' || fixtureStatus !== 'Halftime') {
      const interval = setInterval(() => {
        footballAPI.getFixtureData(fixtureID)
          .then(fixture => {
            setFixtureData(fixture)
            setFixtureStatus(fixture.status) 
          })
        console.log('Data Fetched')
      }, 10000)
      return () => clearInterval(interval);
    }
  })

  return (
    <div className="fixture">
      {fixtureData.fixture_id 
        ? <React.Fragment>
            <FixtureHeader fixtureStatus={fixtureStatus} fixtureData={fixtureData} />
            <FixtureBody fixtureData={fixtureData} predictions={predictions} />
          </React.Fragment>
        : <MainSpinner />
      }
    </div>
  );
}


export default Fixture;
