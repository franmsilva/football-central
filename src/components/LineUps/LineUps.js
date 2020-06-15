import React from 'react';
import './LineUps.css';

// My Components
import Player from '../Player/Player';

const LineUps = ({team}) => (
  <div className="lineups">
    <p><span>Manager:</span> {team.coach}</p>
    <p><span>Formation:</span> {team.formation}</p>
    <div className='lineups__starting'> 
      <h1>Starting XI</h1>
      {team.startXI.map(player => {
        return <Player key={player.player_id} player={player} />
      })}
    </div>
    <div className='lineups__subs'>
      <h1>Substitutes</h1>
      {team.substitutes.map(player => {
        return <Player player={player} />
      })}
    </div>
  </div>
);

export default LineUps;
