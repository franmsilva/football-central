import React from 'react';
import './DefTable.css';

const DefTable = ({flags, defenders}) => (
  <table id='defenders'>
    <thead>
      <tr className='table__header'> 
        <th></th>
        <th>Apps</th>
        <th>Mins</th>
        <th>Tackl</th>
        <th>Intr</th>
        <th>Pass</th>
        <th>K.P.</th>
        <th>P.A.</th>
        <th>Goals</th>
      </tr>
    </thead>
    <tbody>
      {defenders.map(player => {
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
            <td>{player.tackles.total}</td>
            <td>{player.tackles.interceptions}</td>
            <td>{player.passes.total}</td>
            <td>{player.passes.key}</td>
            <td>{player.passes.accuracy}%</td>
            <td>{player.goals.total}</td>
          </tr>
        )})
      }
    </tbody>
  </table>
);

export default DefTable;
