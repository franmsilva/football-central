import React from 'react';
import './GKTable.css';

const GKTable = ({flags, goalkeepers}) => (
  <table id='goalkeepers'>
        <thead>
          <tr className='table__header'> 
            <th></th>
            <th>Apps</th>
            <th>Mins</th>
            <th>G.C.</th>
            <th>Pass</th>
            <th>P.A.</th>
          </tr>
        </thead>
        <tbody>
          {goalkeepers.map(player => {
            return ( 
              <tr key={player.player_id}>
                <td className='table__player'>
                  <img src={[flags[player.nationality]]} width={20} alt='' />
                  <p>
                  {
                    player.player_name.split(' ').length > 3 
                      ? `${player.player_name.split(' ')[0]} ${player.player_name.split(' ').pop()}`
                      : player.player_name
                  }
                  </p>
                </td>
                <td>{player.games.appearences}</td>
                <td>{player.games.minutes_played}</td>
                <td>{player.goals.conceded}</td>
                <td>{player.passes.total}</td>
                <td>{player.passes.accuracy}%</td>
              </tr>
            )})
          }
        </tbody>
      </table>
);

export default GKTable;
