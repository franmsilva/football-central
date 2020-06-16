import React from 'react';
import './StatsH2H.css';

const StatsH2H = ({stats}) => (
  <div className="h2hstats">
    <div className='h2hstats__container'> 
      <div 
        className='h2hstats__homewin'
        style={{width: `${stats["last_h2h"].wins.total/stats["last_h2h"].played.total*100}%`}}
      >
        {stats["last_h2h"].wins.total}
      </div>
      <div 
        className='h2hstats__draw' 
        style={{width: `${stats["last_h2h"].draws.total/stats["last_h2h"].played.total*100}%`}}
      >
        {stats["last_h2h"].draws.total}
      </div>
      <div 
        className='h2hstats__awaywin' 
        style={{width: `${stats["last_h2h"].loses.total/stats["last_h2h"].played.total*100}%`}}
      >
        {stats["last_h2h"].loses.total}
      </div>
    </div>
  </div>
);

export default StatsH2H;
