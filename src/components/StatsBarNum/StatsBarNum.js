import React from 'react';

import './StatsBarNum.css';

const StatsBarNum = ({statHome, statAway, statName}) => (
  <div className="StatsBarNum">
    <div className='stats__hometeam__value'>{statHome || 0}</div>
    <div className='stats__container'> 
      <div 
        className='stats__hometeam'
        style={{width: `${!Number(statHome) && !Number(statAway)
          ? 0 
          : Number(statHome)/(Number(statHome) + Number(statAway))*100}%`}}
      />
    </div>
    <p className='stats__name'>{statName}</p>
    <div className='stats__container'>
        <div 
          className='stats__awayteam' 
          style={{width: `${!Number(statHome) && !Number(statAway)
            ? 0 
            : Number(statAway)/(Number(statHome) + Number(statAway))*100}%`}}
        />
      </div>
    <div className='stats__awayteam__value'>{statAway || 0}</div>
  </div>
);

export default StatsBarNum;
