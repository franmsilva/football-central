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
import FixtureCountdown from '../FixtureCountdown/FixtureCountdown';
import MainSpinner from '../MainSpinner/MainSpinner';


const Fixture = () => {
  const { fixtureID } = useParams();
  const [fixtureStatus, setFixtureStatus] = useState({});
  const [fixtureData, setFixtureData] = useState({});
  const [predictions, setPredictions] = useState({});

  useEffect(() => {
    footballAPI.getFixtureData(fixtureID)
      .then(fixture => {
        setFixtureData(fixture)
        setFixtureStatus(fixture.status)
      })
    footballAPI.getPredictions(fixtureID) 
      .then(predictions => setPredictions(predictions))
  }, [fixtureID]);

  return (
    <div className="fixture">
      {fixtureData.fixture_id 
        ? <React.Fragment>
            <FixtureHeader fixtureStatus={fixtureStatus} fixtureData={fixtureData} />
            {fixtureStatus === "Not Started" 
              ? <FixtureCountdown startTime={fixtureData.event_date}/>
              : <FixtureBody fixtureData={fixtureData} predictions={predictions} />
            }
          </React.Fragment>
        : <MainSpinner />
      }
    </div>
  );
}


export default Fixture;
