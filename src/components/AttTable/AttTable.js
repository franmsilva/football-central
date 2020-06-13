import React from 'react';
import './AttTable.css';

const AttTable = ({flags, attackers}) => (
  <table id='attackers'>
    <thead>
      <tr className='table__header'> 
        <th></th>
        <th>Apps</th>
        <th>Mins</th>
        <th>Pass</th>
        <th>K.A.</th>
        <th>P.A.</th>
        <th>Shots</th>
        <th>SOT</th>
        <th>Goals</th>
        <th>Ass</th>
        <th>Drib</th>
        <th>C.D.</th>
      </tr>
    </thead>
    <tbody>
      {attackers.map(player => {
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
            <td>{player.passes.total}</td>
            <td>{player.passes.key}</td>
            <td>{player.passes.accuracy}%</td>
            <td>{player.shots.total}</td>
            <td>{player.shots.on}</td>
            <td>{player.goals.total}</td>
            <td>{player.goals.assists}</td>
            <td>{player.dribbles.attempts}</td>
            <td>{player.dribbles.success}</td>
          </tr>
        )})
      }
    </tbody>
  </table>
);


export default AttTable;
