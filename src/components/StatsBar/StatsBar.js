import React from 'react';
import './StatsBar.css';

const StatsBar = ({statHome, statAway, statName}) => (
  <div className="StatsBar">
    <div className='stats__hometeam__value'>{statHome}</div>
    <div className='stats__container home'> 
      <div 
        className='stats__hometeam'
        style={{width: `${!statHome || !statAway
                ? 0 
                : statHome}`}}
      />
    </div>
    <p className='stats__name'>{statName}</p>
    <div className='stats__container'>
      <div 
        className='stats__awayteam away' 
        style={{width: `${!statHome || !statAway
                ? 0 
                :statAway}`}}
      />
    </div>
    <div className='stats__awayteam__value'>{statAway}</div>    
  </div>
);

export default StatsBar;
