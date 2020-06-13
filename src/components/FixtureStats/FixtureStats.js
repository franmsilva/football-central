import React from 'react';
import './FixtureStats.css';

const FixtureStats = ({statistics}) => (
  <React.Fragment>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${statistics['Ball Possession'].home}`}}
        >
          {statistics['Ball Possession'].home}
        </div>
      </div>
      <p className='stats__name'>Possession</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${statistics['Ball Possession'].away}`}}
        >
          {statistics['Ball Possession'].away}
          </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Total passes'].home)/(Number(statistics['Total passes'].home) + Number(statistics['Total passes'].away))*100}%`}}
        >
          {statistics['Total passes'].home}
        </div>
      </div>
      <p className='stats__name'>Passes</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Total passes'].away)/(Number(statistics['Total passes'].home) + Number(statistics['Total passes'].away))*100}%`}}
        >
          {statistics['Total passes'].away}
        </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${statistics['Passes %'].home}`}}
        >
          {statistics['Passes %'].home}
        </div>
      </div>
      <p className='stats__name'>Passes %</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${statistics['Passes %'].away}`}}
        >
          {statistics['Passes %'].away}
          </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Total Shots'].home)/(Number(statistics['Total Shots'].home) + Number(statistics['Total Shots'].away))*100}%`}}
        >
          {statistics['Total Shots'].home}
        </div>
      </div>
      <p className='stats__name'>Total Shots</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Total Shots'].away)/(Number(statistics['Total Shots'].home) + Number(statistics['Total Shots'].away))*100}%`}}
        >
          {statistics['Total Shots'].away}
        </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Shots on Goal'].home)/(Number(statistics['Shots on Goal'].home) + Number(statistics['Shots on Goal'].away))*100}%`}}
        >
          {statistics['Shots on Goal'].home}
        </div>
      </div>
      <p className='stats__name'>Shots on Target</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Shots on Goal'].away)/(Number(statistics['Shots on Goal'].home) + Number(statistics['Shots on Goal'].away))*100}%`}}
        >
          {statistics['Shots on Goal'].away}
        </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Fouls'].home)/(Number(statistics['Fouls'].home) + Number(statistics['Fouls'].away))*100}%`}}
        >
          {statistics['Fouls'].home}
        </div>
      </div>
      <p className='stats__name'>Fouls</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Fouls'].away)/(Number(statistics['Fouls'].home) + Number(statistics['Fouls'].away))*100}%`}}
        >
          {statistics['Fouls'].away}
        </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Corner Kicks'].home)/(Number(statistics['Corner Kicks'].home) + Number(statistics['Corner Kicks'].away))*100}%`}}
        >
          {statistics['Corner Kicks'].home}
        </div>
      </div>
      <p className='stats__name'>Corners</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Corner Kicks'].away)/(Number(statistics['Corner Kicks'].home) + Number(statistics['Corner Kicks'].away))*100}%`}}
        >
          {statistics['Corner Kicks'].away}
        </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Offsides'].home)/(Number(statistics['Offsides'].home) + Number(statistics['Offsides'].away))*100}%`}}
        >
          {statistics['Offsides'].home}
        </div>
      </div>
      <p className='stats__name'>Offsides</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Offsides'].away)/(Number(statistics['Offsides'].home) + Number(statistics['Offsides'].away))*100}%`}}
        >
          {statistics['Offsides'].away}
        </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Yellow Cards'].home)/(Number(statistics['Yellow Cards'].home) + Number(statistics['Yellow Cards'].away))*100}%`}}
        >
          {statistics['Yellow Cards'].home}
        </div>
      </div>
      <p className='stats__name'>Yellow Cards</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Yellow Cards'].away)/(Number(statistics['Yellow Cards'].home) + Number(statistics['Yellow Cards'].away))*100}%`}}
        >
          {statistics['Yellow Cards'].away}
        </div>
      </div>
    </div>
    <div className="FixtureStats">
      <div className='stats__container home'> 
        <div 
          className='stats__hometeam'
          style={{width: `${Number(statistics['Red Cards'].home)/(Number(statistics['Red Cards'].home) + Number(statistics['Red Cards'].away))*100}%`}}
        >
          {statistics['Red Cards'].home}
        </div>
      </div>
      <p className='stats__name'>Red Cards</p>
      <div className='stats__container'>
        <div 
          className='stats__awayteam away' 
          style={{width: `${Number(statistics['Red Cards'].away)/(Number(statistics['Red Cards'].home) + Number(statistics['Red Cards'].away))*100}%`}}
        >
          {statistics['Red Cards'].away}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default FixtureStats;
